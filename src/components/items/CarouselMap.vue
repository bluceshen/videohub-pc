<template>
    <div class="carousel-box">
      <el-carousel
        class="carousel"
        :interval="5000"
        height="36rem"
        :autoplay="true"
      >
        <el-carousel-item v-for="(item, index) in images" :key="index">
          <el-image
            class="carousel-image"
            fit="cover"
            :src="item.idView"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </template>
  
  <script>
  export default {
    name: "Index",
    data() {
      return {
        images: [
          { id: 0, idView: require("@/assets/images/img1.png") },
          { id: 1, idView: require("@/assets/images/img2.png") },
          { id: 2, idView: require("@/assets/images/img3.png") },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .carousel-box {
    width: 95%;
    height: 95%;
    display: grid;
    place-items: center;
  }
  
  .carousel {
    width: 100%;
    height: 100%;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 确保图片覆盖整个容器 */
  }
  </style>