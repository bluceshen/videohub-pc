<template>
  <div class="box" ref="playerBox" @click="videoPlayPage">
    <video ref="video" muted disablePictureInPicture loop>
      <source :src="videoUrl" type="video/mp4" />
      <p>您的浏览器不支持视频播放。</p> <!-- 提示信息 -->
    </video>

    <!--封面-->
    <div class="cover" :class="{ hidden: !isCover }">
      <img ref="coverImage" alt="封面图片" />
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
import { ref, onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from "vue-router";

// 定义接收的props
const props = defineProps({
  title: String,
  author: String,
  releaseTime: Number,
  videoUrl: String,
  coverUrl: String,
});

const store = useStore(); // 直接访问 Vuex store

// 响应式变量
const isCover = ref(true);
const video = ref(null);
const playerBox = ref(null);
const coverImage = ref(null);

function playVideo() {
  if (video.value) {
    // 确保 video.value 不是 undefined
    video.value.play()
      .then(() => {
        isCover.value = false;  // 鼠标移入时隐藏封面
      })
      .catch(error => {
        console.error('播放视频时发生错误:', error);
      });
  } else {
    console.error('video element is undefined');
  }
}

function pauseVideo() {
  if (video.value) {
    // 直接调用 pause()，不使用 then 或 catch
    video.value.pause();
    isCover.value = true;  // 鼠标移出时展示封面
  } else {
    console.error('video element is undefined');
  }
}

// 使用事件委托
function addEventListeners() {
  if (playerBox.value) {
    playerBox.value.addEventListener('mouseenter', playVideo);
    playerBox.value.addEventListener('mouseleave', pauseVideo);
  }
}

function removeEventListeners() {
  if (playerBox.value) {
    playerBox.value.removeEventListener('mouseenter', playVideo);
    playerBox.value.removeEventListener('mouseleave', pauseVideo);
  }
}

// 在组件挂载时添加事件监听器
onMounted(() => {
  addEventListeners();
});

// 在组件卸载时移除事件监听器
onUnmounted(() => {
  removeEventListeners();
});

// 懒加载封面图
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        coverImage.value.src = props.coverUrl;
        observer.unobserve(coverImage.value);
      }
    });
  });

  observer.observe(coverImage.value);
});

const router = useRouter();

function videoPlayPage(){
  const {title} = props;
  const {author} = props;
  const {releaseTime} = props;
  const {videoUrl} = props;
  const {coverUrl} = props;

  const currentVideoData = {
    title:title,
    name:author,
    published_at:releaseTime,
    video_path:videoUrl,
    cover_path:coverUrl
  }
  store.dispatch('home/setCurrentVideoData',currentVideoData);
  router.push('/videoPlay')
  
}

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
  border-radius: 3px;
  border: solid var(--grey2) 1px;
}

video {
  position: absolute;
  width: 100%;
  height: 73%;
  object-fit: fill;
}

.cover {
  position: absolute;
  opacity: 1;
  width: 100%;
  height: 73%;
  justify-content: center;
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
  grid-row: 2/3;
  grid-column: 1/2;
  background-color: var(--grey2);
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5fr 3fr;
  position: relative;
}

.title {
  grid-column: 1;
  grid-row: 1;
  font-size: var(--font-video-title);
  color: var(--text-white1);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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