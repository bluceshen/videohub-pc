<template>
    <div>
        <uploader ref="myUploader" :options="options" :multiple="false" :autoStart="false" @file-added="onFileAdded"
            @file-progress="onFileProgress" @file-success="onFileSuccess" @file-error="onFileError">
            <uploader-drop>
                <p>拖拽文件或点击选择文件进行上传</p>
                <uploader-btn :single="true">选择文件</uploader-btn>
            </uploader-drop>
        </uploader>
        <button @click="startUpload">开始上传</button>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// 配置上传选项
// 配置上传选项
const options = reactive({
  target: 'http://localhost:8080/upload_chunk',  // 上传地址
  chunkSize: 1024 * 1024 * 5,  // 每个分片 5MB
  testChunks: true,  // 开启分片校验
  headers: {
    Authorization: 'Bearer your_token',  // 设置 Authorization token
  },
  fileParameterName: 'chunk_data',  // 上传的文件参数名
});

// 文件列表
const files = ref([]);
// 创建一个 ref 引用来访问 uploader 组件实例
const myUploader = ref(null);
// 上传进度
const progress = ref(0);

// 处理文件添加事件
function onFileAdded(file) {
    console.log("文件添加:", file);
}

// 处理文件上传进度
function onFileProgress(file, percentage) {
    console.log("文件上传中:", percentage);
    progress.value = percentage;
}

// 处理文件上传成功
function onFileSuccess(file, response) {
    console.log("文件上传成功:", file, response);
}

// 处理文件上传失败
function onFileError(file, error) {
    console.error("文件上传失败:", file, error);
}

// 开始上传
function startUpload() {
    while (myUploader.value.files.length > 1) {
        myUploader.value.files.shift();  // 移除数组尾部的文件，直到只剩下一个文件
    }

    console.log(myUploader.value.files);
}
</script>
