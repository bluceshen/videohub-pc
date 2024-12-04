<template>
    <div class="video-small-card">
        <div class="pic-box" ref="playerBox" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <video ref="video" muted style="position:absolute; width: 100%; height:100%; object-fit: fill;" disablePictureInPicture loop>
                <source :src="videoUrl" type="video/mp4" />
            </video>
            <!--封面-->
            <div class="cover" :class="{ hidden: !isCover }">
                <img :src="coverUrl" alt="封面图片" />
            </div>
        </div>
        <!-- 视频信息 -->
        <div class="card-info">
            <a href="#" :title="videoTitle">{{videoTitle}}</a>
            <div class="upname">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.5" color="currentColor">
                        <path
                            d="M3.59 18.177a3 3 0 0 1-.418-.349C2 16.657 2 14.771 2 11s0-5.657 1.172-6.828S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172S22 7.229 22 11s0 5.657-1.172 6.828q-.194.195-.418.349" />
                        <path
                            d="M8.686 16.926c-.864.527-3.131 1.602-1.75 2.947C7.61 20.53 8.36 21 9.306 21h5.389c.944 0 1.695-.47 2.37-1.127c1.38-1.345-.887-2.42-1.751-2.947a6.39 6.39 0 0 0-6.628 0M14.5 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" />
                    </g>
                </svg>
                <span style="margin-left: 10px;">{{author}}</span>
            </div>
            <!--视频播放量-->
            <div class="playinfo">
                <div class="play-num">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
                    </svg>
                    <p>{{playNum}}</p>
                </div>

                <div class="video-comment">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M6.5 13.5h11v-1h-11zm0-3h11v-1h-11zm0-3h11v-1h-11zM3 17V3h18v17.077L17.923 17zm1-1h14.35L20 17.644V4H4zm0 0V4z" />
                    </svg>
                    <p>{{ commentNum }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { debounce } from 'lodash';

// 定义接收的props
const props = defineProps({
    videoTitle: String,
    author: String,
    videoUrl: String,
    coverUrl: String,
    playNum: Number,
    commentNum: Number
});

// 响应式变量
const isCover = ref(true);
const video = ref(null);
const handlePlay = async () => {
  try {
    if (video.value) {
      video.value.play();
      isCover.value = false;  // 播放后隐藏封面
    }
  } catch (error) {
    console.error('Error playing video:', error);
  }
};

const handlePause = () => {
  if (video.value) {
    video.value.pause();
    isCover.value = true;   // 暂停后显示封面
    console.log('Cover shown:', isCover.value);
  }
};


const handleMouseEnter = debounce(() => {
  handlePlay();
}, 100); // 可以根据需要调整延迟时间

const handleMouseLeave = debounce(() => {
  handlePause();
}, 100); // 可以根据需要调整延迟时间

</script>




<style scoped>
/* 视频卡片 */
.video-small-card {
    display: flex;
    background-color: var(--background-black4);
    border-radius: 6px;
}

/*  视频盒子 */
.pic-box {
    width: 141px;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    background-color: aliceblue;
    cursor: pointer;
}


/* 封面 */
.cover {
    position: absolute;
    opacity: 1;
    width: 100%;
    height: 100%;
    justify-content: center;
    transition: opacity 0.3s ease;
    /* 添加过渡效果 */
    z-index: 1000;
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

/* 视频信息 */
.card-info {
    flex: 1;
    margin-left: 10px;
    font-size: 13px;
    line-height: 15px;
    width: calc(100% -151px);
    height: 100%;
    background-color: var(--background-black4);
}

/* 视频标题 */
.card-info a {
    color: var(--text-white2);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* -webkit-line-clamp: 2; */
    overflow: hidden;
    word-break: break-all;
    line-height: 20px;
    height: 40px;
    text-decoration: none;
    cursor: pointer;
}

/* up名字 */
.upname {
    display: flex;
    margin-top: 10px;
    height: 20px;
    align-items: center;
    justify-content: flex-start;
    color: var(--text-white1);
}

/*  播放量信息 */
.playinfo {
    color: var(--text-white1);
    display: flex;

}

.playinfo div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    margin-bottom: 4px;
}
</style>