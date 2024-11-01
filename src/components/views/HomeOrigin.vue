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
  height: 100%; /* 或者设置为一个固定的高度 */
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 定义五列 */
  grid-auto-rows:250px;
  gap: 20px 10px;
  box-sizing: border-box;
  padding: 10px;
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

