<template>
  <div class="carousel-box">
    <el-carousel
      class="carousel"
      :interval="5000"
      :autoplay="true"
      :height="carouselHeight"
    >
      <el-carousel-item v-for="(item, index) in images" :key="index">
        <el-image class="carousel-image" :src="item.idView"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ElCarousel, ElCarouselItem, ElImage } from 'element-plus';

// 图片数据
const images = ref([
  { id: 0, idView: require("@/assets/images/img1.png") },
  { id: 1, idView: require("@/assets/images/img2.png") },
  { id: 2, idView: require("@/assets/images/img3.png") },
]);

// 轮播图高度
const carouselHeight = ref('380px');

// 设置轮播图高度的函数
const setCarouselHeight = () => {
  const width = document.documentElement.clientWidth;
  if(width*0.3>380){
    carouselHeight.value = `${width * 0.3}px`;
  }
};

// 在组件挂载时和窗口大小变化时更新轮播图高度
onMounted(() => {
  setCarouselHeight();
  window.addEventListener('resize', setCarouselHeight);
});

// 在组件卸载时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', setCarouselHeight);
});
</script>

<style scoped>
.carousel-box {
  width: 100%; /* 设置轮播图的宽度 */
  height: 100%;
  margin: auto; /* 水平居中 */
}

.carousel-image {
  width: 100%; /* 图片宽度填满容器 */
  height: 100%; /* 图片高度自适应 */
  display: block; /* 去除图片下方的空白间隙 */
  object-fit: cover; /* 保证图片按比例填充容器 */
}
</style>