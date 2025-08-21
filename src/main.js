// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router/index.js'
import App from './App.vue'
import './styles/common.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')