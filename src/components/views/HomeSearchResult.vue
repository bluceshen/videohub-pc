<template>
  <div class="sub-grid-container">
    <!-- 使用 v-for 渲染 Video 组件列表 -->
    <Video class="video" v-for="video in videos" :key="video.title" :title="video.title" :author="video.name"
      :releaseTime="video.published_at" :videoUrl="video.video_path" :coverUrl="video.cover_path"></Video>
  </div>
</template>

<script setup>
import {onMounted,computed,watch} from 'vue';
import { useStore } from 'vuex';
import Video from '../items/Video.vue';

const store = useStore();

// 从 store 中获取 videoHomeData 数组
const videos = computed(() => store.state.home.videoHomeSearchResultsData);

// 观察 like 的变化
watch(
  () => store.state.home.like, 
  (newLike, oldLike) => {
    // 当 like 发生变化时，发送请求
    const params = {
      status: 0,
      like: newLike,
    };
    store.dispatch('home/fetchSearchResultsData', params);
  },
  { immediate: true } // {immediate: true} 表示在 watch 创建时立即执行一次
);

// 如果您还需要在组件挂载时立即执行一次请求，可以保留 onMounted 钩子
onMounted(() => {
  const params = {
    status: 0,
    like: store.state.home.like,
  };
  store.dispatch('home/fetchSearchResultsData', params);
});
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