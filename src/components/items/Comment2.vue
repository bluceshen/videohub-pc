<template>
    <div class="comment">
        <div class="my-reply">
            <el-avatar class="my-avatar" :size="35" :src="myAvatar"></el-avatar>
            <div class="my-input">
                <el-input class="reply-input" type="textarea" v-model="input_comment0" :autosize=true :maxlength="200"
                    size="medium" placeholder="输入评论..."></el-input>
                <el-button class="reply-btn" :size="40" @click="sendComment" type="primary">发表评论</el-button>
            </div>
        </div>
        <div class="comment-container">
            <div v-for="(item, i) in comments" :key="i" class="comment-father">
                <!-- 父评论 -->
                <div class="author-info">
                    <el-avatar class="auther-avatar" :size="35" :src="item.author_avatar"></el-avatar>
                    <span class="author-name">{{ item.author_name }}</span>
                </div>

                <div class="content-container">
                    <div class="comment-content">
                        <span>{{ item.comment_content }}</span>
                    </div>
                    <div class="comment-info">
                        <span class="text-info">{{ item.created_at }}</span>
                        <span class="text-info">点赞{{ item.like }}</span>
                        <button class="reply-button" @click="chooseCommentToReply(item.comment_id, i,item.author_name)">回复</button>
                    </div>
                </div>


                <div class="comment-sub-container">
                    <div v-for="(reply, j) in item.reply" :key="j" class="comment-son">
                        <div class="author-info">
                            <el-avatar class="auther-avatar" :size="35" :src="reply.author_avatar"></el-avatar>
                            <span class="author-name">{{ reply.author_name }} 回复 {{reply.reply_to}}:</span>
                        </div>

                        <div class="content-container">
                            <div class="comment-content">
                                <span>{{ reply.comment_content }}</span>
                            </div>
                            <div class="comment-info">
                                <span class="text-info">{{ reply.created_at }}</span>
                                <span class="text-info">点赞{{ reply.like }}</span>
                                <button class="reply-button" @click="chooseCommentToReply(reply.comment_id,i,reply.author_name)"> 回复 </button>
                            </div>
                        </div>
                    </div>
                    <div div class=" my-reply" v-show="showIdx==i">
                        <el-avatar class="my-avatar" :size="35" :src="myAvatar"></el-avatar>
                        <div class="my-input">
                            <el-input class="reply-input" type="textarea" v-model="input_comment" :autosize=true
                                :maxlength="200" size="medium" :placeholder="targetCommentAuthorName"></el-input>
                            <el-button class="reply-btn" :size="40" @click="sendComment" type="primary">发表评论</el-button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script setup>

import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const input_comment0 = ref("");
const input_comment = ref("");
const myAvatar = computed(() => store.state.user.avatar);

//0是第一个父评论的子评论
const showIdx = ref(0);
const targetCommentId = ref(-1);
const targetCommentAuthorName = ref("");





const comments = [
    {
        comment_id: 11,
        author_name: 'Lana Del Rey',
        author_avatar:'',
        comment_content: '我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
        created_at: 123123245534,
        likes_count: 15,
        is_liked: false,
        reply: [
            {
                comment_id:12,
                author_name: 'LanRey',
                author_avatar:'',
                comment_content: '太好了',
                created_at: 123123245550,
                likes_count: 15,
                is_liked:true,
                reply_to:'Lana Del Rey'
            }
        ]
    },    
    {
        comment_id: 11,
        author_name: 'Lana Del Rey',
        author_avatar:'',
        comment_content: '我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
        created_at: 123123245534,
        likes_count: 15,
        is_liked: false,
        reply: [
            {
                comment_id:12,
                author_name: 'LanRey',
                author_avatar:'',
                comment_content: '太好了',
                created_at: 123123245550,
                likes_count: 15,
                is_liked:true,
                reply_to:'Lana Del Rey'
            }
        ]
    },    
    {
        comment_id: 11,
        author_name: 'Lana Del Rey',
        author_avatar:'',
        comment_content: '我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
        created_at: 123123245534,
        likes_count: 15,
        is_liked: false,
        reply: [
            {
                comment_id:12,
                author_name: 'LanRey',
                author_avatar:'',
                comment_content: '太好了',
                created_at: 123123245550,
                likes_count: 15,
                is_liked:true,
                reply_to:'Lana Del Rey'
            }
        ]
    }
]

function chooseCommentToReply(comment_id, father_id, author_name) {
    targetCommentId.value = comment_id;
    showIdx.value = father_id;
    targetCommentAuthorName.value = "回复"+author_name;
}


</script>

<style scoped>
.comment {
    background-color: antiquewhite;
    height: auto;
    margin-bottom: 20px;
}

.my-reply {
    background-color: var(--text-white2);
    position: relative;
    display: grid;
    grid-template-rows: auto;
    /* 允许行根据内容自适应高度 */
    grid-template-columns: 40px 1fr;
    min-height: 80px;
    padding: 5px;
    /* 给容器添加内边距 */
}

.my-input {
    display: grid;
    grid-template-rows: auto 1fr;
    /* 定义两行，一行用于输入框，一行用于按钮 */
}

.reply-input {
    width: 100%;
}

.my-avatar {
    grid-row: 1;
    grid-column: 1;
}

.reply-btn {
    grid-row: 2;
    grid-column: 1;
    justify-self: end;
    /* 将按钮向右对齐 */
    margin-top: 5px;
    /* 给按钮顶部添加外边距 */
}

.comment-container {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
}

.comment-father {
    margin:10px;
    position: relative;
    display: grid;
    grid-template-rows: 40px 1fr;
}

.author-info {
    /* background-color: var(--text-white2); */
    position: relative;
    display: grid;
    grid-template-columns: 40px 1fr;
    padding: 5px;
    /* 给容器添加内边距 */
    /* border: 1px solid black; */
}

.auther-avatar {
    grid-row: 1;
    grid-column: 1;
}

.author-name {
    grid-row: 1;
    grid-column: 2;
    align-self: center;
}

.content-container {
    display: grid;
    grid-template-rows: 1fr 20px;
    width: 90%;
    justify-self: center;
    /* border: 1px solid red; */
}

.comment-info {
    margin-top: 5px;
    /* 给容器添加内边距 */
    font-size: 12px;
}

.text-info {
    margin-right: 30px;
}

.comment-son {
    margin:10px;
    position: relative;
    display: grid;
    grid-template-rows: 40px 1fr;
}

.comment-sub-container {
    margin-left: 40px;
    height: auto;
    margin-bottom: 10px;
}

.reply-button{
    font-size: 12px;
    border: none;
}
</style>
