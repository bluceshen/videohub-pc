<template>
  <div class="upload">
    <Upload />
  </div>

</template>

<script setup>
import Upload from '../items/VideoUpLoad.vue';


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped表示这里的css样式不会泄露到其他组件 */
.upload {
  max-width: 2000px;
  min-width: 1150px;
  width: 100%;
  height: auto;
  margin: 0 auto;
}
</style>