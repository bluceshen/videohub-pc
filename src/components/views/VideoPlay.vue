<template>
  <div class="VideoPlay-Win">
      <div class="VideoPlay">
        <VideoLeftPlayer 
          :releaseTime="video.releaseTime" 
          :videoTitle="video.title"
          :videoUrl="video.videoUrl"
          :videoDesc="'阿斯顿发射点发射点发射点反对犯得上地方发射点发射点发射点发生大的发'"
          >
        </VideoLeftPlayer>
      </div>
      <div class="VideoList">
        <VideoRightList></VideoRightList>
      </div>
  </div>
</template>

<script setup>
import VideoLeftPlayer from "../items/VideoLeftPlayer.vue"
import VideoRightList from "../items/VideoRightList.vue"
import { ref } from 'vue';
import { useStore } from 'vuex';
/* 切换为videoList */
const store = useStore(); // 直接访问 Vuex store
const video = ref(store.state.videoHomeData[2]); // 从 store 中获取 videoHomeData 数组


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped表示这里的css样式不会泄露到其他组件 */
.VideoPlay-Win {
  max-width: 2000px;
  min-width: 1150px;
  width: auto;
  height: auto;
  grid-gap: 0 50px;
  grid-template-columns: 2fr 1fr;
  margin: 0 auto;
  padding: 0 50px;
  /* 这里加了50px就应该在min-width-50px */
  display: grid;
  box-sizing: content-box;
  justify-content: center;
  position: relative;
  background-color: var(--background-black1);
}

.VideoPlay {
  grid-column: 1;
}

.VideoList {
  grid-column: 2;
}
</style>