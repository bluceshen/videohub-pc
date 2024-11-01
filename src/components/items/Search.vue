<template>
  <div class="search-box">
    <div class ="search-container">
      <el-input class="search" v-model="searchValue" placeholder="搜索视频"></el-input>
      <div class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="Red"
              d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const searchValue = ref("");
</script>

<style scoped>
.search-box {
  width: 100%;
  height: 100%;
  display: grid;
  background-image: url("@/assets/background.jpeg");
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 2fr 2fr 3fr;

  position: relative;
  place-items: center;
}

.search-container {
    width: 100%;
    height: 100%;
    position: relative;
    grid-column: 4/8;
    grid-row: 2;


    display: grid;
    grid-template-columns: 0.3fr repeat(10, 1fr);
    place-items: center;

    z-index: 1000;
    background-color:var(--text-white1);
    border-radius: 5px;
}

.search{
    grid-column:2/11;
}

.search-icon {
    grid-column: 11;
}
</style>
