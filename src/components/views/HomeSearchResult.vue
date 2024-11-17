<template>
  <div class="sub-grid-container">
    <!-- 使用 v-for 渲染 Video 组件列表 -->
    <Video v-for="video in videos" :key="video.title" :title="video.title" :author="video.author"
      :releaseTime="video.releaseTime" :videoUrl="video.videoUrl" :coverUrl="video.coverUrl"></Video>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import Video from '../items/Video.vue';

const store = useStore(); // 直接访问 Vuex store
const videos = ref(store.state.home.searchResultsData); // 从 store 中获取 searchResultsData 数组

// 当组件挂载时，从 API 获取视频数据
// onMounted(() => {
//   // store.dispatch('fetchVideos');
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
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows:250px;
  /* 定义五列 */
  gap: 20px 10px;
  box-sizing: border-box;
  padding: 10px;
  overflow-y: auto;
}
</style>