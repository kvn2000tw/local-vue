// src/main.js
import { createApp } from 'vue'

import App from './App.vue'
import './styles/common.css'

import router from './router'

const app = createApp(App)

app.config.globalProperties.$env = {
  
  apiUrl: process.env.NODE_ENV === 'development'
   ? ''
    : 'https://cdn.jsdelivr.net/gh/kvn2000tw/local-vue/public'
}
app.use(router).mount('#app')
//createApp(App).use(router).mount('#app')