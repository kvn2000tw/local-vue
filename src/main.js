// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import './styles/common.css'

import router from './router'

createApp(App).use(router).mount('#app')