<template>
  <div class="sub-grid-container">
    <div class="carouse-map">
      <CarouselMap></CarouselMap>
    </div>
    <!-- 使用 v-for 渲染 Video 组件列表 -->
    <Video class="video"
      v-for="video in videos"
      :key="video.title"
      :title="video.title"
      :author="video.author"
      :releaseTime="video.releaseTime"
      :videoUrl="video.videoUrl"
      :coverUrl="video.coverUrl"
    ></Video>
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

  .sub-grid-container{
    width:100%;
    height:100%;
    grid-row: 2;
    grid-column: 1;
  
    display: grid;
  
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(3,1fr);

    place-items: center;

    gap:20px 10px;
  }

  .carouse-map{
    z-index: 1050;
    grid-column: 1/4;
    grid-row: 1/3;
    background-color: rgb(56, 140, 212);
    display: grid;
    place-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  /* 其他样式 */
}

  .video{
    width: 100%;
    height: 100%;
    /* padding: 10px; */
  }
  </style>