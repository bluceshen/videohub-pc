<template>
  <div class="grid-container">
    <Auth></Auth>
    <sidebar></sidebar>
    <div class="main-content">
      <li style="height: 33%;">a</li>
      <li style="height: 33%;">a</li>


      <router-view>
      </router-view>        
      <button @click="openAuth">aaa</button>
      <button @click="closeAuth">bbb</button>
    </div>
  </div>
</template>

<script setup>
// 导入侧边栏组件
import Auth from "./components/items/Auth.vue";
import Sidebar from "./components/items/Sidebar.vue";

import { useStore } from 'vuex';

const store = useStore();

function openAuth() {
  store.dispatch('open');
}

function closeAuth() {
  store.dispatch('close');
}

</script>

<style>
/* 此处是根属性 */
html,
body,
#app {
  background-color:var(--background-black1);
  height: 100%;
  width: 100%;
  margin: 0;
}

.grid-container {
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 11fr;
  width: 100%;
  height: 100%;
  background-color:var(--background-black1);
}

.main-content{
  grid-column: 11fr;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: var(--background-black2);
}

/* 主题颜色 */
:root{
  --background-black1: #121212;
  --background-black2:#161616;
  --background-black3:#252525;
  --background-black4:#303030;

  --text-white1:rgba(255,255,255,0.87);
  --text-white2:rgba(255,255,255,0.60);
  --text-white3:rgba(255,255,255,0.38);

  --grey1:#1c1c1c;
  --grey2:#363636;
  --grey3:#696969;
  --grey4: #778899;

  --silver:#C0C0C0;

  --red1: #8B0000;

  --on-green:#32CD32;
  --on-green2:#80d380;
  --off-red:#FF4500;
  --off-red2:#faaf93;
}
</style>
