import { createStore } from 'vuex';

// 定义模块对象
const homeStore = {
  namespaced: true, // 启用命名空间
  state() {
    return {
      videoHomeData: [
        {
          title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
          author: "阿嚏2123",
          releaseTime: "2023-11-3",
          videoUrl: "/movie.mp4",
          coverUrl: "/img1.png"
        },
        {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          }
          ,
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          }
          ,
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
      ], // 存储视频主页的数据
      searchResultsData: [
        {
          title: "鲑鱼盛宴133",
          author: "阿嚏",
          releaseTime: "2023-11-13",
          videoUrl: "/movie.mp4",
          coverUrl: "/img1.png"
        },
        {
            title: "鲑鱼盛宴133",
            author: "阿嚏",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴133",
            author: "阿嚏",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴133",
            author: "阿嚏",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴133",
            author: "阿嚏",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴133",
            author: "阿嚏",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
          {
            title: "鲑鱼盛宴133",
            author: "阿嚏",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
          },
      ] // 存储搜索结果的数据
    };
  },
  mutations: {
    // 定义你的 mutations
  },
  actions: {
    // 定义你的 actions
  },
  getters: {
    // 定义你的 getters
  }
};

// 默认导出模块对象
export default homeStore;