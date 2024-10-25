import { createStore } from 'vuex';

const userStore = createStore({
  state() {
    return {
      showAuth: true  // 控制登录模态框的显示和隐藏
    };
  },
  mutations: {
    open(state) {
      state.showAuth = true;
    },
    close(state){
      state.showAuth = false;
    }
  },
  actions: {
    open({ commit }) {
      commit('open');
    },
    close({commit}){
      commit('close')
    }
  }
});

export default userStore;