<template>
    <div class="left-container scroll-sticky">
        <!-- 视频标题，发布时间，返回按钮 -->
        <div class="viewbox_info">
            <div class="viewbox_report">
                <div class="video-title">
                    <span :title="videoTitle" >{{ videoTitle }}</span>
                </div>
            </div>
            <br>
            <div class="video-meta">
                <span>{{ releaseTime }}</span>
            </div>
        </div>
        <br>
        <!-- 视频播放器 -->
        <div class="video-wrap">
            <video style="width: 100%; height:100%; object-fit: fill;" controls :src="videoUrl">
                <source :src="videoUrl" type="video/mp4" />
                <p>视频加载失败</p>
            </video>
        </div>
        <!-- 底部工具栏 -->
        <div class="video-toolbar-container">
            <div class="video-like" title="点赞" 
            :class="{ clicked_like: like_checked }" 
            @click="clicked_like">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2M20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2"/>
                </svg>
            </div>
            <div class="video-collect" title="收藏" 
            :class="{ clicked_collect: collect_checked }" 
            @click="clicked_collect">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 36 36">
                    <path fill="currentColor" d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z" class="clr-i-solid clr-i-solid-path-1"/>
                    <path fill="none" d="M0 0h36v36H0z"/>
                </svg>
            </div>
        </div>
        <!-- 视频简介 -->
        <div class="video-desc-container">
            <div class="video-desc-info" ref="desc_info">
                <p ref="desc_text">
                    {{videoDesc}}
                </p>
            </div>
            <button v-if="showOk" ref="toggleButton" class="toggle-button" @click="handlerClick">更多</button>
        </div>
        <!-- 评论列表 -->
        <div class="video-comment-container">
            <div class="video-comment-info">
                <slot></slot>
            </div>
            
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex';

/* 切换为videoList */
const store = useStore(); // 直接访问 Vuex store
const video = ref(store.state.home.videoHomeData[1]); // 从 store 中获取 videoHomeData 数组

// 定义接收的props
const props = defineProps({
    videoTitle: String,
    releaseTime: String,
    videoUrl: String,
    videoDesc: String
});

/* 控制 视频简介相关的展开/关闭按钮  */
const showOk = ref(false);
const desc_info = ref(null);
const toggleButton = ref(null);
const desc_text = ref(null);
const like_checked = ref(false);
const collect_checked = ref(false);

// 点赞和收藏后不一样的图样
function clicked_collect(event) {
    collect_checked.value = !collect_checked.value;
}

function clicked_like(event) {
    like_checked.value = !like_checked.value;
}

// 判断是否需要显示展开/关闭按钮
function checkDesc(){
    if(desc_text.value) {
        const textHeight = desc_text.value.scrollHeight;
        if (textHeight > 80) {
            showOk.value = true;
        }
    }
}

onMounted(() => {
    checkDesc();
});
function handlerClick() {
    if (desc_info.value && toggleButton.value) {
        const currentMaxHeight = desc_info.value.style.maxHeight;
        if (currentMaxHeight) {
            desc_info.value.style.maxHeight = null; // 展开
            toggleButton.value.textContent = "更多";
        } else {
            desc_info.value.style.maxHeight = `${desc_info.value.scrollHeight}px`; // 折叠
            toggleButton.value.textContent = "收起";
        }
    }
}

</script>

<style scoped>
/* 烟花粒子 */
@keyframes fireworks {
    0% {
        transform: translateY(0) scale(1);
    }
    25% {
        transform: translateY(-10px) scale(1.5);
    }
    75%{
        transform: translateY(-5px) scale(2);
    }
    100% {
        transform: translateY(0) scale(1);
    }
}

/* 视频播放整体 */
.left-container {
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--background-black2);
}

/* 视频播放上部标题 */
.viewbox_info {
    position: relative;
    height: 80px;
    left:10px;
    box-sizing: border-box;
    /* padding-top: 22px; */
}

/*  视频播放标题，日期 */
.viewbox_report {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* 垂直居中对齐子元素 */
}

/* 标题文字 */
.viewbox_info .video-title {
    color: var(--text-white1);
    font-size: 20px;
    cursor: pointer;
}

/* 发布时间 */
.video-meta span {
    color: var(--text-white3);
}

/* 视频播放器 */
.video-wrap {
    width: 100%;
    height: 60%;
    background-color: var(--background-black2);
    border-radius: 2px;
}

/* 点赞收藏 */
.video-toolbar-container {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--background-black4);
    border-bottom: solid 1px var(--background-black2);
    color: rgb(206, 207, 208);
}

.video-like, .video-collect {
    margin-left: 20px; /* 在两个图标之间添加10px的间隔 */
}

.video-toolbar-container .video-like:hover{
    transform: scale(1.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    transition: color 0.3s ease;
}

.video-toolbar-container .video-collect:hover{
    transform: scale(1.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    transition: color 0.3s ease;
}

.video-like.clicked_like,
.video-collect.clicked_collect {
    color: aqua;
    animation: fireworks 0.5s forwards;
    transition: transform 0.5s ease-in-out;
}

/* 视频播放简介 */
.video-desc-container {
    width: 100%;
    /* background-color: var(--background-black4); */
    display: flex;
    flex-direction: column;
}

.video-desc-info {
    margin-left:10px;
    min-height: 60px;
    max-height: 80px;
    font: 13px;
    color: var(--text-white2);
    overflow: hidden;
    /* 超出部分隐藏 */
    transition: max-height 0.5s ease-in-out;
}

.toggle-button {
    width: 60px;
    font-size: 13px;
    background-color: var(--background-black4);
    border: snow 1px rgb(7, 7, 7, 0.5);
    color: var(--text-white2);
    cursor: pointer;
    transition: color 0.5s ease-in-out;
}

.toggle-button:hover {
    background-color: var(--background-black2);
}



/* 视频播放评论 */
/*
.video-comment-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--text-white1);
}
*/
</style>