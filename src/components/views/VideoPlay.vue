<template>
  <div class="VideoPlay-Win">
      <div class="VideoPlay">
        <VideoPlayer 
          :releaseTime="`2023-11-3`" 
          :videoTitle="`阿姆大撒旦发射点发斯特dddd丹`"
          >
        </VideoPlayer>
      </div>
      <div class="VideoList">
        <VideoList></VideoList>
      </div>
  </div>
</template>

<script setup>
import VideoPlayer from "../items/VideoPlayer.vue"
import VideoList from "../items/VideoList.vue"


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped表示这里的css样式不会泄露到其他组件 */
.VideoPlay-Win {
  max-width: 2540px;
  min-width: 1280px;
  width: auto;
  height: auto;
  grid-gap: 0 50px;
  grid-template-columns: 2fr 1fr;
  margin: 0 auto;
  padding: 0 50px;
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