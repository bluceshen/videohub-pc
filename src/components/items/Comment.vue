<template>
    <div class="father-comment-container">
        <span class="title">评论</span>
        <div class="comment-num">{{ commentNum }}</div>

        <div class="origin-reply-container">
            <el-avatar class="my-avatar"></el-avatar>
            <el-input class="my-input"></el-input>
            <el-button class="my-publish">发布</el-button>
        </div>
        <hr class="line">

        <div class="view-content">

        </div>

        
    </div>
</template>

<script setup>
 import { ref } from 'vue';
var commentNum = ref(1232130);

</script>

<style scoped>
.father-comment-container{
    width: 100%;
    height: 100%;
    border: 1px var(--background-black1) solid;
    overflow: hidden;
    background-color:var(--text-white2);
    z-index: 100;
    position: relative;
}
.title{
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: large;
    color: var(--background-black1);
}
.comment-num{
    position:absolute;
    left: 60px;
    top:15px;
    font-size: small;
    color: var(--background-black1);
}
.line{
    position: relative;
    background-color: black;
    height: 1px;
    border: none;
    width: 90%;
}

.origin-reply-container{
    top:20px;
    left:20px;
    width: 100%;
    height: 100px;
    position: relative;
    display: grid;
    grid-template-rows: 1;
    grid-template-columns: 1fr 8fr 2fr; 
    place-items: center;
}
.my-avatar{
    position: relative;
    grid-template-columns: 1;
    height: 40px;
    width: 40px;
}
.my-input{
    position: relative;
    grid-template-columns: 2;
    height: 30px;
    width:100%;
    
}
.my-publish{
    position: relative;
    grid-template-columns: 3;
    height: 30px;
    width:30px;
    left:-20px;
    font-size:10px;
    font-weight: 1000;
}


.comment-content{
    width: 100%;
    top:10px;
    background-color:antiquewhite;
    position: relative;
    display: grid;
    grid-auto-rows:auto;
    overflow: hidden;

}   

</style>