<template>
    <div class="right-container">
        <!-- up信息 -->
        <div class="right-up-info">
            <div class="up-panel-container">
                <div class="up-image">
                    <img :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'" />
                </div>
                <div class="up-name">
                    <span title="牛魔王打发手动阀的"> {{ upName }} </span>
                </div>
            </div>
            <div class="return_button">
                <el-button color="#000" :dark="isDark" plain @click="lastPage">返回</el-button>
            </div>
        </div>
        <!-- 推荐列表 -->
        <div class="video-list">
            <VideoSmallCard class="video" v-for="video in videos" :key="video.title" :title="video.title" :author="video.name"
            :releaseTime="video.published_at" :videoUrl="video.video_path" :coverUrl="video.cover_path" :playNum="video.view_count" :commentNum="video.comment_count"></VideoSmallCard>
        </div>
    </div>
</template>

<script setup>
import VideoSmallCard from './VideoSmallCard.vue';
import { useStore } from 'vuex';
import {computed} from 'vue';

/* 切换为videoList */
const store = useStore(); // 直接访问 Vuex store
const videos = computed(()=>store.state.home.videoHomeData); // 从 store 中获取 videoHomeData 数组
import { useRouter } from "vue-router";

const router = useRouter();


const props = defineProps({
    userImgUrl: String,
    upName: String,
    videoList: Array,
})

function lastPage(){
    router.go(-1);
}

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

.right-up-info {
    width: 100%;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
}


/* 作者信息储备容器 */
.up-panel-container {
    display: flex;
    align-items: center;
    background-color: var(--background-black4);
    border-radius: 20px;
    padding: 10px; /* 添加一些内边距，使得布局更美观 */
    gap: 10px; /* 在项目之间添加间距 */
}

/* 作者头像 */
.up-image {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    overflow: hidden;
}

.up-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.up-name {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-white2);
    white-space: nowrap; /* 防止文字换行 */
    margin-top: -15px;
}

.up-name span:hover {
    cursor: pointer;
    color: var(--text-white1);
    transition: color 0.3s ease;
}

/* 视频列表 */
.video-list {
    width: 100%;
    padding-right: 10px;
    height: 68vh;

    display: flex;
    flex-direction: column;
    background-color: var(--background-black2);
    overflow: auto;

    /* height: fit-content; */
}

/* 视频小框 */
.video-card {
    margin: 0;
    padding: 0;
    margin-bottom: 12px;
}
</style>