import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './global.css'
import root from './vuex/root'
import uploader from 'vue-simple-uploader';
import 'vue-simple-uploader/dist/style.css';

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(root)
app.use(uploader)

app.mount('#app')