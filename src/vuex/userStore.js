import { createStore } from 'vuex';
// 定义模块对象
const userStore = {
  namespaced: true, // 启用命名空间
  state() {
    return {
      showAuth: true,
      status:"正常",
      registerTime:"2024-10-16",
      name:"username",
      phone:"phone",
      email:"email",
      text:"text",

      myVideoData: [
        {
          title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
          author: "阿嚏2123",
          releaseTime: "2023-11-3",
          videoUrl: "/movie.mp4",
          coverUrl: "/img1.png",
          status:"approved"
        },
        {
          title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
          author: "阿嚏2123",
          releaseTime: "2023-11-3",
          videoUrl: "/movie.mp4",
          coverUrl: "/img1.png",
          status:"pending"
        },
        {
          title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
          author: "阿嚏2123",
          releaseTime: "2023-11-3",
          videoUrl: "/movie.mp4",
          coverUrl: "/img1.png",
          status:"rejected"
        },
        {
          title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
          author: "阿嚏2123",
          releaseTime: "2023-11-3",
          videoUrl: "/movie.mp4",
          coverUrl: "/img1.png",
          status:"banned"
        },
        {
          title: "鲑鱼盛宴s啊打发士大夫士大夫士大夫地方撒地方的WERWER阿斯顿发射点反对1",
          author: "阿嚏2123",
          releaseTime: "2023-11-3",
          videoUrl: "/movie.mp4",
          coverUrl: "/img1.png",
          status:"approved"
        },
      ],
      myCollectionData: [
        {
          title: "鲑鱼盛宴133",
          author: "阿嚏",
          releaseTime: "2023-11-13",
          videoUrl: "/movie.mp4",
          coverUrl: "/img1.png"
        }
      ],
      
    };
  },
  mutations: {
    // 定义你的 mutations
    openAuth(state){
      state.showAuth = true;
    },
    closeAuth(state){
      state.showAuth = false;
    }
  },
  actions: {
    // 定义你的 actions
    openAuth({commit}){
      commit('openAuth');
    },
    closeAuth({commit}){
      commit('closeAuth');
    }
  },
  getters: {
    // 定义你的 getters
  }
};

// 默认导出模块对象
export default userStore;