import { createStore } from 'vuex';

const homeStore = createStore({
  state() {
    return {
      videoHomeData: [
        {
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img2.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img3.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img4.png"
        }
        ,{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img5.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img6.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img7.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img8.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img2.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img3.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img4.png"
        }
        ,{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img5.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img8.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img1.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img2.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img3.png"
        },{
            title: "鲑鱼盛宴1",
            author: "阿嚏2123",
            releaseTime: "2023-11-3",
            videoUrl: "/movie.mp4",
            coverUrl: "/img4.png"
        }

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
            title: "鲑鱼盛宴22222",
            author: "阿嚏2",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img3.png"
        },
        {
            title: "鲑鱼盛宴22222",
            author: "阿嚏2",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img8.png"
        },
        {
            title: "鲑鱼盛宴22222",
            author: "阿嚏2",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img9.png"
        },
        {
            title: "鲑鱼盛宴22222",
            author: "阿嚏2",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img5.png"
        },
        {
            title: "鲑鱼盛宴22222",
            author: "阿嚏2",
            releaseTime: "2023-11-13",
            videoUrl: "/movie.mp4",
            coverUrl: "/img7.png"
        }

      ] // 存储搜索结果的数据
    };
  },
  mutations: {
    // setVideoHomeData(state, payload) {
    //   state.videoHomeData = payload;
    // },
    // setSearchResultsData(state, payload) {
    //   state.searchResultsData = payload;
    // },
    // 可以添加更多mutations来处理视频数据的更新、添加、删除等操作
  },
  actions: {
    // fetchVideoHomeData({ commit }) {
    //   // 这里应该是一个API调用，获取视频主页的数据
    //   // 假设API调用的结果是videoData
    //   commit('setVideoHomeData', videoData);
    // },
    // fetchSearchResultsData({ commit }, query) {
    //   // 这里应该是一个API调用，根据查询参数获取搜索结果
    //   // 假设API调用的结果是searchResults
    //   commit('setSearchResultsData', searchResults);
    // },
    // 可以添加更多actions来处理视频数据的获取和更新
  }
});

export default homeStore;