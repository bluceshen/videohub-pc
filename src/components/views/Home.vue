<template>
  <div class="grid-container">
    <Search class="search"></Search>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Search from "../items/Search.vue";
let search = null;

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
}

.search {
  grid-row: 1;
  grid-column: 1;
}
</style>
