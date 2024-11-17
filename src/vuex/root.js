import { createStore } from 'vuex';
import homeStore from './homeStore'; // 导入 homeStore 模块
import userStore from './userStore'; // 导入 userStore 模块

export const store = createStore({
  modules: {
    home: homeStore,
    user: userStore
  }
});

export default store;