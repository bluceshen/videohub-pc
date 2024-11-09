<template>
    <div class="comment-container">
      <div class="video">
        <!-- 视频播放部分 -->
      </div>
      <div class="recommend">
        <!-- 推荐部分 -->
      </div>
      <div class="comment">
        <Comment_copy></Comment_copy>
      </div>
    </div>
  </template>
  
  <script setup>
  import Comment_copy from '../items/Comment_copy.vue';

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    /* scoped表示这里的css样式不会泄露到其他组件 */
    .comment-container{
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: aqua;
      display: grid;

      grid-template-columns: 2fr 1fr;
      grid-template-rows: 600px 1fr;
    }
    .video{
      width:100%;
      height: 600px;
      grid-column: 1;
      grid-row: 1;
      /* border: 1px solid black; */
    }
    .recommend{
      width: 100%;
      height: 600px;
      grid-column: 2;
      grid-row: 1;
      /* border: 1px solid black; */
    }
    .comment{
      width: 100%;
      height: 100%;
      /* border: 1px solid black; */
      grid-column: 1;
      grid-row: 2;
    }
  </style>
  