<template>
  <div class="sub-grid-container">

    <div class="carouse-map">
      <CarouselMap></CarouselMap>
    </div>    

    <!-- 使用 v-for 渲染 Video 组件列表 -->
    <Video class="video" v-for="video in videos" :key="video.title" :title="video.title" :author="video.author"
      :releaseTime="video.releaseTime" :videoUrl="video.videoUrl" :coverUrl="video.coverUrl"></Video>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import Comment_father from '../items/Comment.vue';
import Video from '../items/Video.vue';
import CarouselMap from '../items/CarouselMap.vue';

const store = useStore(); // 直接访问 Vuex store
const videos = ref(store.state.videoHomeData); // 从 store 中获取 videoHomeData 数组

// 当组件挂载时，从 API 获取视频数据
// onMounted(() => {
//   store.dispatch('fetchVideos');
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped表示这里的css样式不会泄露到其他组件 */

.sub-grid-container {
  width: 100%;
  height: 83.3vh;
   /* 或者设置为一个固定的高度 */
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 定义五列 */
  grid-auto-rows:250px;
  gap: 20px 10px;
  box-sizing: border-box;
  padding: 10px;
  overflow-y: auto;
}

/* Webkit浏览器滚动条样式 */
.sub-grid-container::-webkit-scrollbar {
  width: 5px; /* 滚动条宽度 */
}

.sub-grid-container::-webkit-scrollbar-track {
  background: var(--background-black1);/* 滚动条轨道背景色 */
  border-radius: 3px; /* 滚动条轨道圆角 */
}

.sub-grid-container::-webkit-scrollbar-thumb {
  background: #888; /* 滚动条滑块背景色 */
  border-radius: 6px; /* 滚动条滑块圆角 */
}

.sub-grid-container::-webkit-scrollbar-thumb:hover {
  background: var(--background-black1); /* 滚动条滑块悬停背景色 */
}
/* Firefox滚动条样式 */
.sub-grid-container {
  scrollbar-width: thin; /* 设置滚动条宽度 */
  scrollbar-color: #bb4040 #d15353; /* 设置滚动条滑块和轨道的颜色 */
}

.carouse-map {
  grid-column: 1 / span 3; /* 从第1列开始，跨越3列 */
  grid-row: 1 / span 2; /* 从第1行开始，跨越2行 */
  z-index: 1050;
  background-color: rgb(56, 140, 212);
  display: grid;
  place-items: center;
}

</style>

