<template>
  <div class="upload">
    <VideoUpload />

  </div>
</template>

<script setup>
import VideoUpload from '../items/VideoUpLoad.vue';

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped表示这里的css样式不会泄露到其他组件 */
.upload {
  width: 100%;
  height: 100%;
}
</style>