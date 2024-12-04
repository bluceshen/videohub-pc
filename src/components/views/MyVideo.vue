<template>
  <div class="container">
    <br>
    <span class="title">审核通过</span>
    <hr class="line">
    <div class="sub-grid-container">
      <!-- 使用 v-for 渲染审核通过的视频组件列表 -->
        <Video class="video" v-for="video in approvedVideos" :key="video.title" :title="video.title" :author="video.name"
      :releaseTime="video.published_at" :videoUrl="video.video_path" :coverUrl="video.cover_path"></Video>
      </div>
    <br>

    <span class="title">待审核</span>
    <hr class="line">
    <div class="sub-grid-container">
      <!-- 使用 v-for 渲染待审核的视频组件列表 -->
      <Video class="video" v-for="video in pendingVideos" :key="video.title" :title="video.title" :author="video.name"
      :releaseTime="video.published_at" :videoUrl="video.video_path" :coverUrl="video.cover_path"></Video>
    </div>
    <br>

    <span class="title">审核未通过</span>
    <hr class="line">
    <div class="sub-grid-container">
      <!-- 使用 v-for 渲染审核未通过的视频组件列表 -->
      <Video class="video" v-for="video in rejectedVideos" :key="video.title" :title="video.title" :author="video.name"
      :releaseTime="video.published_at" :videoUrl="video.video_path" :coverUrl="video.cover_path"></Video>
    </div>
    <br>

    <span class="title">被封禁</span>
    <hr class="line">
    <div class="sub-grid-container">
      <!-- 使用 v-for 渲染被封禁的视频组件列表 -->
      <Video class="video" v-for="video in bannedVideos" :key="video.title" :title="video.title" :author="video.name"
      :releaseTime="video.published_at" :videoUrl="video.video_path" :coverUrl="video.cover_path"></Video>
    </div>
  </div>
</template>

<script setup>
import { computed,onMounted } from 'vue';
import { useStore } from 'vuex';
import Video from '../items/Video.vue';

const store = useStore(); // 直接访问 Vuex store
const videos = computed(()=>store.state.user.myVideoData); // 从 store 中获取 myVideoData 数组

// 创建计算属性来分离不同状态的视频
const approvedVideos = computed(() => videos.value.filter(video => video.status === 0));
const pendingVideos = computed(() => videos.value.filter(video => video.status === 1));
const rejectedVideos = computed(() => videos.value.filter(video => video.status === 2));
const bannedVideos = computed(() => videos.value.filter(video => video.status === 3));

onMounted(() => {
  // store.dispatch('user/fetchMyVideoData');
});

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped表示这里的css样式不会泄露到其他组件 */
.container{
  scrollbar-width: thin; /* 设置滚动条宽度 */
  width: 100%;
  height: 100vh;
  overflow-y:auto;
  background-color: var(--background-black1);
}

/* Webkit浏览器滚动条样式 */
.container::-webkit-scrollbar {
  width: 5px; /* 滚动条宽度 */
}

.container::-webkit-scrollbar-track {
  background: var(--background-black1);/* 滚动条轨道背景色 */
  border-radius: 3px; /* 滚动条轨道圆角 */
}

.container::-webkit-scrollbar-thumb {
  background: #888; /* 滚动条滑块背景色 */
  border-radius: 6px; /* 滚动条滑块圆角 */
}

.container::-webkit-scrollbar-thumb:hover {
  background: var(--text-white2); /* 滚动条滑块悬停背景色 */
}

.sub-grid-container {
  margin-left: 5%;
  width: 90%;
  /* 或者设置为一个固定的高度 */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  /* 定义五列 */
  gap: 20px 10px;
  box-sizing: border-box;
  padding: 10px;
  overflow-y: hidden;
  background-color: var(--background-black2);
}

.title {
  font-size: 40px;
  font-style:initial;
  margin-left: 5.5%;
  color:var(--text-white2);
}

.line{
  width: 90%;
  margin-left:5%;
  border:none;
  height: 1px;
  background-color:var(--text-white3);
}


</style>