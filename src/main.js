import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './global.css'
import userStore from './vuex/userStore'
import homeStore from './vuex/homeStore'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(userStore)
app.use(homeStore)
app.mount('#app')