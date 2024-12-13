<template>
    <div>
        <div v-clickoutside="hideReplyBtn" @click="inputFocus" class="my-reply">
            <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
            <div class="reply-info">
                <div tabindex="0" contenteditable="true" id="replyInput" spellcheck="false" placeholder="输入评论..."
                    class="reply-input" @focus="showReplyBtn" @input="onDivInput($event)">
                </div>
            </div>
            <div class="reply-btn-box" >
                <el-button class="reply-btn" size="medium" @click="sendComment" type="primary">发表评论</el-button>
            </div>
        </div>
        <div v-for="(item, i) in comments" :key="i" class="author-title reply-father">
            <el-avatar class="header-img" :size="40" :src="item.headImg"></el-avatar>
            <div class="author-info">
                <span class="author-name">{{ item.name }}</span>
                <span class="author-time">{{ item.time }}</span>
            </div>
            <div class="icon-btn">
                <span @click="showReplyInput(i, item.name, item.id)"><i
                        class="iconfont el-icon-s-comment"></i>评论数{{ item.commentNum }}</span>
                <i class="iconfont el-icon-caret-top"></i>喜欢{{ item.like }}
            </div>
            <div class="talk-box">
                <p>
                    <span class="reply">{{ item.comment }}</span>
                </p>
            </div>
            <div class="reply-box">
                <div v-for="(reply, j) in item.reply" :key="j" class="author-title">
                    <el-avatar class="header-img" :size="40" :src="reply.fromHeadImg"></el-avatar>
                    <div class="author-info">
                        <span class="author-name">{{ reply.from }}</span>
                        <span class="author-time">{{ reply.time }}</span>
                    </div>
                    <div class="icon-btn">
                        <span @click="showReplyInput(i, reply.from, reply.id)"><i
                                class="iconfont el-icon-s-comment"></i>评论数{{ reply.commentNum }}</span>
                        <i class="iconfont el-icon-caret-top"></i>喜欢{{ reply.like }}
                    </div>
                    <div class="talk-box">
                        <p>
                            <span>回复 {{ reply.to }}:</span>
                            <span class="reply">{{ reply.comment }}</span>
                        </p>
                    </div>
                    <div class="reply-box">

                    </div>
                </div>
            </div>
            <div v-show="_inputShow(i)" class="my-reply my-comment-reply">
                <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
                <div class="reply-info">
                    <div tabindex="0" contenteditable="true" spellcheck="false" placeholder="输入评论..."
                        @input="onDivInput($event)" class="reply-input reply-comment-input"></div>
                </div>
                <div class=" reply-btn-box">
                    <el-button class="reply-btn" size="medium" @click="sendCommentReply(i, j)"
                        type="primary">发表评论</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ArticleComment',
    data() {
        return {
            btnShow: true,
            index: '0',
            replyComment: '',
            myName: 'Lana Del Rey',
            myHeader: 'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg&#39;',
            myId: 19870621,
            to: '',
            toId: -1,
            comments: [
                {
                    name: 'Lana Del Rey',
                    id: 19870621,
                    headImg: 'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg&#39;',
                    comment: '我发布一张新专辑Norman Fucking Rockwell,大家快来听啊',
                    time: '2019年9月16日 18:43',
                    commentNum: 2,
                    like: 15,
                    inputShow: false,
                    reply: [
                        {
                            from: 'Taylor Swift',
                            fromId: 19891221,
                            fromHeadImg: 'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg&#39;', 
                            to: 'Lana Del Rey',
                            toId: 19870621,
                            comment: '我很喜欢你的新专辑！！',
                            time: '2019年9月16日 18:43',
                            commentNum: 1,
                            like: 15,
                            inputShow: false
                        },
                        {
                            from: 'Ariana Grande',
                            fromId: 1123,
                            fromHeadImg: 'https://ae01.alicdn.com/kf/Hf6c0b4a7428b4edf866a9fbab75568e6U.jpg&#39;',
                            to: 'Lana Del Rey',
                            toId: 19870621,
                            comment: '别忘记宣传我们的合作单曲啊',
                            time: '2019年9月16日 18:43',
                            commentNum: 0,
                            like: 5,
                            inputShow: false

                        }
                    ]
                },
                {
                    name: 'Taylor Swift',
                    id: 19891221,
                    headImg: 'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg&#39;',
                    comment: '我发行了我的新专辑Lover',
                    time: '2019年9月16日 18:43',
                    commentNum: 1,
                    like: 5,
                    inputShow: false,
                    reply: [
                        {
                            from: 'Lana Del Rey',
                            fromId: 19870621,
                            fromHeadImg: 'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
                            to: 'Taylor Swift',
                            toId: 19891221,
                            comment: '新专辑和speak now 一样棒！',
                            time: '2019年9月16日 18:43',
                            commentNum: 25,
                            like: 5,
                            inputShow: false

                        }
                    ]
                },
                {
                    name: 'Norman Fucking Rockwell',
                    id: 20190830,
                    headImg: 'https://ae01.alicdn.com/kf/Hdd856ae4c81545d2b51fa0c209f7aa28Z.jpg&#39',
                    comment: 'Plz buy Norman Fucking Rockwell on everywhere',
                    time: '2019年9月16日 18:43',
                    commentNum: 0,
                    like: 5,
                    inputShow: false,
                    reply: []
                },
            ]
        }
    },
    directives: { clickoutside },
    methods: {
        inputFocus() {
            var replyInput = document.getElementById('replyInput');
            replyInput.style.padding = "8px 8px"
            replyInput.style.border = "2px solid blue"
            replyInput.focus()
        },
        showReplyBtn() {
            this.btnShow = true
        },
        hideReplyBtn() {
            this.btnShow = false
            replyInput.style.padding = "10px"
            replyInput.style.border = "none"
        },
        showReplyInput(i, name, id) {
            this.comments[this.index].inputShow = false
            this.index = i
            this.comments[i].inputShow = true
            this.to = name
            this.toId = id
        },
        _inputShow(i) {
            return this.comments[i].inputShow
        },
        sendComment() {
            if (!this.replyComment) {
                this.$message({
                    showClose: true,
                    type: 'warning',
                    message: '评论不能为空'
                })
            } else {
                let a = {}
                let input = document.getElementById('replyInput')
                let timeNow = new Date().getTime();
                let time = this.dateStr(timeNow);
                a.name = this.myName
                a.comment = this.replyComment
                a.headImg = this.myHeader
                a.time = time
                a.commentNum = 0
                a.like = 0
                this.comments.push(a)
                this.replyComment = ''
                input.innerHTML = '';

            }
        },
        sendCommentReply(i, j) {
            if (!this.replyComment) {
                this.$message({
                    showClose: true,
                    type: 'warning',
                    message: '评论不能为空'
                })
            } else {
                let a = {}
                let timeNow = new Date().getTime();
                let time = this.dateStr(timeNow);
                a.from = this.myName
                a.to = this.to
                a.fromHeadImg = this.myHeader
                a.comment = this.replyComment
                a.time = time
                a.commentNum = 0
                a.like = 0
                this.comments[i].reply.push(a)
                this.replyComment = ''
                document.getElementsByClassName("reply-comment-input")[i].innerHTML = ""
            }
        },
        onDivInput: function (e) {
            this.replyComment = e.target.innerHTML;
        },
        dateStr(date) {
            //获取js 时间戳
            var time = new Date().getTime();
            //去掉 js 时间戳后三位，与php 时间戳保持一致
            time = parseInt((time - date) / 1000);
            //存储转换值 
            var s;
            if (time < 60 * 10) {//十分钟内
                return '刚刚';
            } else if ((time < 60 * 60) && (time >= 60 * 10)) {
                //超过十分钟少于1小时
                s = Math.floor(time / 60);
                return s + "分钟前";
            } else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
                //超过1小时少于24小时
                s = Math.floor(time / 60 / 60);
                return s + "小时前";
            } else if ((time < 60 * 60 * 24 * 30) && (time >= 60 * 60 * 24)) {
                //超过1天少于30天内
                s = Math.floor(time / 60 / 60 / 24);
                return s + "天前";
            } else {
                //超过30天ddd
                var date = new Date(parseInt(date));
                return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
            }
        }
    },
}
</script> 




<style scoped>
.my-reply {
    padding: 10px;
    background-color:var(--background-black1);
}

.my-reply .header-img {
    display: inline-block;
    vertical-align: top;
}

.my-reply .reply-info {
    display: inline-block;
    margin-left: 5px;
    width: 90%;
}

.my-reply .reply-info {
    width: 90%;
}


.my-reply .reply-info .reply-input {
    min-height: 20px;
    line-height: 22px;
    padding: 10px 10px;
    color: var(--text-white3);
    background-color:var(--text-white3);
    border-radius: 5px;
    /* border: 1px solid black; */
}

.my-reply .reply-info .reply-input:empty:before {
    content: attr(placeholder);
}

.my-reply .reply-info .reply-input:focus:before {
    content: none;
}

.my-reply .reply-info .reply-input:focus {
    padding: 8px 8px;
    /* border: 2px solid rgb(145, 127, 26); */
    box-shadow: none;
    outline: none;
}

.my-reply .reply-btn-box {
    height: 30px;
    margin:0 0;
}

.my-reply .reply-btn-box .reply-btn {
    position: relative;
    float: right;
    margin-top: 5px;
    margin-right: 5%;
}

.my-comment-reply {
    margin-left: 50px;
}

.my-comment-reply .reply-input {
    width: flex;
}

/* .author-title:not(:last-child) .reply-father {
    background-color: var(--background-black1);
    color: var(--text-white1);
    border-bottom: 1px solid rgba(223, 223, 223, 0.3);
} */

.author-title {
    padding: 10px;
}

.author-title .header-img {
    display: inline-block;
    vertical-align: top;
}

.author-title .author-info {
    display: inline-block;
    margin-left: 5px;
    width: 60%;
    height: 40px;
    line-height: 20px;
}

.author-title .author-info>span {
    display: block;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.author-title .author-info .author-name {
    color: var(--text-white1);
    font-size: 18px;
    font-weight: bold;
}

.author-title .author-info .author-time {
    font-size: 14px;
}

.author-title .icon-btn {
    width: 30%;
    padding: 0 !important;
    float: right;
}

.author-title .icon-btn {
    width: 20%;
    padding: 7px;
}


.author-title .icon-btn>span {
    cursor: pointer;
}

.author-title .icon-btn .iconfont {
    margin: 0 5px;
}

.author-title .talk-box {
    margin: 0 50px;
}

.author-title .talk-box>p {
    margin: 0;
}

.author-title .talk-box .reply {
    font-size: 16px;
    color: var(--text-white2);
}

.author-title .reply-box {
    margin: 10px 0 0 50px;
    background-color: var(--background-black2);
}
.reply-father{
    background-color: var(--background-black2);
    color: var(--text-white2);
}
</style>
