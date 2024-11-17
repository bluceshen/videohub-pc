<template>
    <div class="upload-container">
        <div class="upload-left">
            <div class="video">
                <VideoLeftPlayer class="video-player" :videoTitle="videoTitle" :releaseTime="releaseTime" :videoUrl="cinVideoUrl"
                    :videoDesc="videoDesc" />
            </div>
            <div class="video-upload">
                <el-upload class="upload-demo" drag action="" :http-request="uploadFile" :show-file-list="false"
                    :before-upload="beforeUpload">
                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                    <div class="el-upload__text">
                        拖拽上传文件 或者 <em>点击上传</em>
                    </div>
                </el-upload>
            </div>
        </div>

        <div class="upload-right">
            <div class="video-image">
                <h3 class="imageTitle">封面</h3>
                <div class="avatar-uploader">
                    <input type="file" id="fileInput" accept="image/jpeg/png" @change="handleFileChange"
                        style="display: none;">
                    <label for="fileInput" class="avatar-uploader-trigger">
                        <img v-if="imageUrl" :src="cinImageUrl" class="avatar">
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </label>
                </div>
            </div>

            <div class="video-title">
                <h3 class="videoTitle">标题</h3>
                <textarea v-model="cinVideoTitle" placeholder="请输入视频标题" />
            </div>
            <div class="video-desc">
                <h3 class="videoDesc">简介</h3>
                <textarea v-model="cinVideoDesc" placeholder="请输入视频简介"></textarea>
            </div>
            <div class="video-upload-btn">
                <button @click="handlePreviw">预览</button>
                <button @click="handleUpload">发布</button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { Plus } from '@element-plus/icons-vue'
import VideoLeftPlayer from './VideoLeftPlayer.vue';
import { UploadFilled } from '@element-plus/icons-vue';


const videoTitle = ref('');// 标题
const videoDesc = ref(''); // 简介
const releaseTime = ref(''); // 发布时间

const cinVideoTitle = ref(''); // 设置标题
const cinVideoDesc = ref(''); // 设置简介
const cinVideoUrl = ref(''); // 设置视频
const cinImageUrl = ref(''); // 设置图片
const imageUrl = ref(false); // 是否已经设置封面

// 视频上传之前的验证
function beforeUpload(file) {
    // 1. 验证文件类型
    const isVideo = file.type.startsWith('video/');
    if (!isVideo) {
        alert('请上传一个视频文件!');
        return false;
    }

    // 2. 验证视频格式（这里限制为 .mp4）
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (fileExtension !== 'mp4') {
        alert('请上传MP4格式的视频!');
        return false;
    }

    // 4. 创建临时的对象 URL 来预览视频
    const videoUrl = URL.createObjectURL(file); // 临时 URL
    cinVideoUrl.value = videoUrl; // 将其赋值给 `cinVideoUrl`

    // 如果需要，可以使用 alert 来查看视频 URL
    console.log("URL is:", cinVideoUrl.value);

    return true; // 返回 true 继续上传
}

function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const isValidFormat = ['image/jpeg', 'image/png'].includes(file.type);
    if (!isValidFormat) {
        alert('Avatar picture must be JPG format!');
        return;
    }

    const reader = new FileReader();
    // 读取文件并设置为 imageUrl
    reader.onload = (e) => {
        cinImageUrl.value = e.target.result; // 将图片的base64数据赋值给imageUrl
        imageUrl.value = true;
    };

    reader.readAsDataURL(file); // 将文件读取为base64格式
}


function handlePreviw() {
    if (cinVideoTitle.value) {
        if (cinVideoTitle.value.length < 2) {
            alert('标题字数太少');
            return;
        }

        if (cinVideoTitle.value.length > 50) {
            alert('标题字数太多，最好5-50字');
            return;
        }

        videoTitle.value = cinVideoTitle.value;
        videoDesc.value = cinVideoDesc.value;
        const currentDate = new Date();
        releaseTime.value = currentDate.toISOString().split('T')[0];
    }else{
        alert('请输入标题');
        return;
    }
}
function clearCinInfo(){
    // 清空输入框
    cinVideoTitle.value = '';
    cinVideoDesc.value = '';
    cinVideoUrl.value = '';
    cinImageUrl.value = '';
    imageUrl.value = false;
    videoTitle.value = '';
    videoDesc.value = '';
    releaseTime.value = '';
}

function handleUpload() {
    alert('上传成功');
    clearCinInfo();
}


</script>

<style scoped>
/*  整个页面上传 */
.upload-container {
    width: 100%;
    height: 100%;
    display: grid;
    background-color: var(--background-black2);
    grid-template-columns: 5fr 4fr;
}

/* 左侧视图 */
.upload-left {
    grid-column: 1;
    background-color: var(--background-black2);
    height: 100%;
    border-right: 3px solid rgb(247, 246, 246);
}

/* 视频展示框 */
.video {
    margin: 20px 10px;
    border-radius: 3px;
    border: 3px solid white;
}

.video .video-player{
    width: 100%;
    height: 100%;
}


/* 上传按钮框 */
.video-upload {
    margin: 0 10px;
    margin-top: 100px;
    margin-bottom: 100px;
    height: 100px;
}


/* 右侧视图 */
.upload-right {
    grid-column: 2;
    height: 100%;
    width: 100%;
    color: var(--text-white2);
    background-color: var(--background-black2);
    box-sizing: border-box;
}

/* 封面 */
.video-image {
    height: 182px;
    width: 100%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 90px auto;
    grid-template-rows: 1fr;
    align-items: center;
}

/* 封面标签 */
.video-image .imageTitle {
    grid-column: 1;
    margin-left: 30px;
}

/* 封面上传框 */
.video-image .avatar-uploader {
    grid-column: 2;
    width: 300px;
    height: 182px;
    box-sizing: border-box;
    object-fit: cover;
}

/* 封面上传框样式 */
.video-image .avatar-uploader-trigger {
    border: 2px solid #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 182px;
    transition: border-color 0.3s;
}


.video-image .avatar-uploader-trigger:hover {
    border-color: #409eff;
}

.video-image .avatar-uploader-trigger img {
    width: 100%;
    height: 100%;
    display: block;
}

.avatar-uploader-trigger .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
}

/* 标题 */
.video-title {
    height: 50px;
    width: 100%;
    margin-top: 80px;
    border-radius: 6px;
    display: grid;
    grid-template-columns: 90px 4fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
}

.video-title .videoTitle {
    grid-column: 1;
    margin-left: 30px;
}

.video-title textarea {
    resize: none;
    grid-column: 2;
    height: 30px;
}

/* 简介 */
.video-desc {
    height: 200px;
    margin-top: 80px;
    border-radius: 6px;
    display: grid;
    grid-template-columns: 90px 4fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
}

.video-desc .videoDesc {
    grid-column: 1;
    margin-left: 30px;
}

.video-desc textarea {
    grid-column: 2;
    height: 200px;
    resize: none;
}

/* 按钮 */
.video-upload-btn {
    width: 100%;
    height: 50px;
    margin-top: 80px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    box-sizing: border-box;
}

.video-upload-btn button {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: rgb(236, 89, 15);
    cursor: pointer;
    box-sizing: border-box;
    color: var(--text-white2);
}
</style>