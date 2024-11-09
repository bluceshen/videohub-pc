<template>
    <div class="right-container">
        <!-- up信息 -->>
        <div class="up-panel-container">
            <div class="up-image"> 
                <img :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'" />
            </div>
            <div class="up-name"> 
                <span title="牛魔王打发手动阀的"> 牛魔王打发手动阀的 </span>
            </div>
        </div>
        <!-- 推荐列表 -->>
        <div class="video-list">
            <VideoSmallCard class="video-card" v-for="item in videos" :key="item.title" style="height: 100px;"
            :videoTitle="item.title"
            :videoUrl="item.videoUrl"
            :author="item.author"
            :playNum="555"
            :commentNum="555"
            :coverUrl="item.coverUrl">
            </VideoSmallCard>
        </div>
    </div>
</template>

<script setup>
import VideoSmallCard from './VideoSmallCard.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';

/* 切换为videoList */
const store = useStore(); // 直接访问 Vuex store
const videos = ref(store.state.videoHomeData); // 从 store 中获取 videoHomeData 数组


const props = defineProps({
    userImgUrl: String,
    userName: String,
    videoList: Array,
})

</script>


<style scoped>
/* 右侧容器 */
.right-container {
    display: flex;
    flex-direction: column;
    background-color: var(--background-black2);
    margin: 0;
    padding: 0;
}

/* 用户容器 */
.up-panel-container{
    width: 180px;
    height: 84px;
    max-width: 70%;
    display: flex;
    align-items: center;
    background-color: var(--background-black4);
    border-radius: 20px;
    position: relative;
}

/*  用户图片 */
.up-image{
    height: 70px;
    width: 70px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
}
.up-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/*  用户名 */
.up-name{
    height: 70px;
    max-width: 100px;
    font-size: 20px;
    font-weight: 700;
    color: var(--text-white2);
    left: 80px;
    top: 20px;
    position: absolute;
    overflow-x: hidden;
    word-wrap: nowrap;
    white-space: nowrap;/*强制不换行*/
    text-overflow: ellipsis;
}

.up-name span:hover{
    cursor: pointer;
    color: var(--text-white1);
    transition: color 0.3s ease;
}

/* 视频列表 */
.video-list{
    width:100%;
    padding-right: 10px;
    height: 68vh;
    
    display: flex;
    flex-direction: column;
    background-color:var(--background-black2);
    overflow: auto;
    
    /* height: fit-content; */
}

/* 视频小框 */
.video-card{
    margin: 0;
    padding: 0;
    margin-bottom: 12px;
}
</style>