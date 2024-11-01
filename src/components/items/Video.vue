<template>
  <div class="box" ref="playerBox">
    <video ref="video" muted style="width: 100%; height: 135px; object-fit: cover" disablePictureInPicture loop>
      <source :src="videoUrl" type="video/mp4" />
      <p>您的浏览器不支持视频播放。</p> <!-- 提示信息 -->
    </video>

    <!--封面-->
    <div class="cover" :class="{ hidden: !isCover }">
      <img :src="coverUrl" alt="封面图片" />
    </div>

    <!-- 视频信息 -->
    <div class="info">
      <div class="title">
        <span>{{ title }}</span>
      </div>
      <div class="desc">
        <span id="author">{{ author }}</span>
        <span>·</span>
        <span id="time">{{ releaseTime }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, onUnmounted } from 'vue';

// 定义接收的props
const props = defineProps({
  title: String,
  author: String,
  releaseTime: String,
  videoUrl: String,
  coverUrl: String,
});

// 响应式变量
const isCover = ref(true);
const video = ref(null);
const playerBox = ref(null);

function playVideo() {
  if (video.value) {
    video.value.play();
    isCover.value = false;  // 鼠标移入时隐藏封面
  }
}

function pauseVideo() {
  if (video.value) {
    video.value.pause();
    isCover.value = true;   // 鼠标移出时显示封面
  }
}

function debounce(fn, delay) {  // 防抖函数
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

const debouncedPlayVideo = debounce(playVideo, 100);
const debouncedPauseVideo = debounce(pauseVideo, 100);

const removeMouseEnterListener = playerBox.value ? () => playerBox.value.addEventListener('mouseenter', debouncedPlayVideo) : null;
const removeMouseLeaveListener = playerBox.value ? () => playerBox.value.addEventListener('mouseleave', debouncedPauseVideo) : null;

// 在组件卸载时移除事件监听器
onUnmounted(() => {
  if (playerBox.value) {
    playerBox.value.removeEventListener('mouseenter', debouncedPlayVideo);
    playerBox.value.removeEventListener('mouseleave', debouncedPauseVideo);
  }
});

onMounted(() => {
  if (playerBox.value) {
    playerBox.value.addEventListener('mouseenter', debouncedPlayVideo);
    playerBox.value.addEventListener('mouseleave', debouncedPauseVideo);
  }
});
</script>

<style scoped>
.box {
  width: 240px;
  height: 185px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  border-radius: 5px;
}

.box:hover {
  border-color: #726c6c;
  transform: scale(1.03);
  cursor: pointer;
}

.cover {
  top: 0;
  left: 0;
  opacity: 1;
  width: 100%;
  height: 135px;
  position: absolute;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.cover.hidden {
  opacity: 0;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  position: absolute;
  width: 100%;
  top: 135px;
  left: 0;
  background-color: rgba(20, 19, 19, 0.5);
  text-align: left;
  border-top: #f8e9e9 solid 1px;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title {
  font-size: 20px;
  margin-bottom: 3px;
  color: aliceblue;
}

.desc {
  font-size: 16px;
  color: rgb(192, 198, 198);
}

.desc span {
  margin-right: 10px;
}
</style>