<template>
  <div class="grid-container">

    <div class="search-container">
      <Search class="search" :searchType="'collection'"></Search>

    </div>

    <div class="content-container">
      <br>
      <span class="title">默认收藏夹</span>
      <hr class="line">
      <div class="sub-grid-container">
        <Video class="video" v-for="video in videos" :key="video.title" :title="video.title" :author="video.name"
          :releaseTime="video.published_at" :videoUrl="video.video_path" :coverUrl="video.cover_path"></Video>
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';
import Video from '../items/Video.vue';
import Search from '../items/Search.vue';

const store = useStore(); // 直接访问 Vuex store
const originalVideos = computed(() => store.state.user.myCollectionData);
const collectionLike = computed(() => store.state.user.collectionLike);

const videos = computed(() => {
  return originalVideos.value.filter(
    video => video.title.toLowerCase().includes(collectionLike.value.toLowerCase()) ||
      video.description.toLowerCase().includes(collectionLike.value.toLowerCase())
  );
});

onMounted(() => {
  // store.dispatch('user/fetchMyCollectionVideoData');
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped表示这里的css样式不会泄露到其他组件 */
.grid-container {
  width: 100%;
  height: 100%;
  display: grid;
  padding: 0;
  grid-template-rows: 1fr 5fr;
  overflow: auto;
}

.search-container {
  width: 100%;
  height: 100%;
  grid-row: 1;
}

.content-container {
  background-color: var(--background-black2);
  width: 100%;
  height: 100%;
  grid-row: 2;
}

.sub-grid-container {
  /* 或者设置为一个固定的高度 */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* 定义五列 */
  grid-auto-rows: 250px;
  gap: 20px 10px;
  box-sizing: border-box;
  padding: 10px;
  overflow-y: auto;
}

/* Webkit浏览器滚动条样式 */
.grid-container::-webkit-scrollbar {
  width: 5px;
  /* 滚动条宽度 */
}

.grid-container::-webkit-scrollbar-track {
  background: var(--background-black1);
  /* 滚动条轨道背景色 */
  border-radius: 3px;
  /* 滚动条轨道圆角 */
}

.grid-container::-webkit-scrollbar-thumb {
  background: #888;
  /* 滚动条滑块背景色 */
  border-radius: 6px;
  /* 滚动条滑块圆角 */
}

.grid-container::-webkit-scrollbar-thumb:hover {
  background: var(--text-white2);
  /* 滚动条滑块悬停背景色 */
}

.title {
  font-size: 40px;
  font-style: initial;
  margin-left: 2%;
  color: var(--text-white2);
}

.line {
  width: 98%;
  margin-left: 1%;
  border: none;
  height: 1px;
  background-color: var(--text-white3);
}
</style>
