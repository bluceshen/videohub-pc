<template>
      <div class="sub-grid-container">
        <Video
          title="鲑鱼盛宴1"
          author="阿嚏"
          releaseTime="2023-11-13"
          videoUrl="/movie.mp4"
          coverUrl="/img1.png"
        ></Video>
        <Video
          title="鲑鱼盛宴3"
          author="阿嚏"
          releaseTime="2023-11-13"
          videoUrl="/movie.mp4"
          coverUrl="/img1.png"
        ></Video>
    </div>
  
  
  </template>
  
  <script setup>
  import Video from '../items/Video.vue';
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  /* scoped表示这里的css样式不会泄露到其他组件 */

  .sub-grid-container{
    width:100%;
    height:100%;
    grid-row: 2;
    grid-column: 1;
  
    display: grid;
  
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(3,1fr);

    place-items: center;
  }
  </style>