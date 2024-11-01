<template>
  <div class="box" ref="playerBox">
    <video ref="video" muted style="position: absolute;  width: 100%;  height: 73%;
    object-fit: fill;" disablePictureInPicture loop>
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
import { ref, defineProps, watch } from 'vue';

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

// 使用Vue的ref引用来添加事件监听器
const removeMouseEnterListener = () => {
  if (playerBox.value) {
    playerBox.value.addEventListener('mouseenter', debouncedPlayVideo);
  }
};
const removeMouseLeaveListener = () => {
  if (playerBox.value) {
    playerBox.value.addEventListener('mouseleave', debouncedPauseVideo);
  }
};

// 在组件挂载时添加事件监听器
import { onMounted, onUnmounted } from 'vue';
onMounted(() => {
  // setTitle();
  removeMouseEnterListener();
  removeMouseLeaveListener();
});

// 在组件卸载时移除事件监听器
onUnmounted(() => {
  if (playerBox.value) {
    playerBox.value.removeEventListener('mouseenter', debouncedPlayVideo);
    playerBox.value.removeEventListener('mouseleave', debouncedPauseVideo);
  }
});


</script>

<style scoped>
.box:hover {
  border-color: #726c6c;
  /* 悬停时改变边框颜色 */
  transform: scale(1.03);
  cursor: pointer;
}

.box {
  display: grid;
  overflow: hidden;
  position: relative;
  min-width: 200px;
  height: 250px;
  grid-template-rows: 73% 27%;
  grid-template-columns: 1fr;
  transition: transform 0.3s ease;
  border-radius: 5px;
}

.cover {
  position: absolute;
  opacity: 1;
  width: 100%;
  height: 73%;
  justify-content: center;
  transition: opacity 0.3s ease;
  /* 添加过渡效果 */
}

.cover.hidden {
  opacity: 0;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 保持封面图的宽高比 */
}

.info {
  grid-row: 2/3;
  grid-column: 1/2;
  background-color: var(--grey2);
  /* 背景半透明 */
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5fr 3fr;
  border-top: var(--text-white1) solid 1px;
  position: relative;
}

.title {
  position: absolute;
  grid-column: 1;
  grid-row: 1;
  font-size: var(--font-video-title);
  color: var(--text-white1);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: nowrap;
  white-space: nowrap;/*强制不换行*/
}

.desc {
  grid-row: 2;
  grid-column: 1;
  font-size: var(--font-video-desc);
  color: var(--text-white2);
}

.desc span {
  margin-right: 10px;
}
</style>