<template>
    <div>
        <el-carousel :interval="5000" height="36rem">
            <el-carousel-item v-for="(item, index) in images" :key="index">
                <el-image :class="className" style="width:100%; height:100%" :src="item.idView" fit="fit"></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    name: "Index",
    data() {
        return {
            images: [
                { id: 0, idView: require("@/assets/images/img1.png") },
                { id: 1, idView: require("@/assets/images/img2.png") },
                { id: 2, idView: require("@/assets/images/img3.png") },
            ],
        }
    }
}
</script>
<style scoped>
.el-carousel__item.is-animating {
    transition: transform 1s ease-in-out;
}
</style>
