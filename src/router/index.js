// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import CommunityHub from '@/pages/CommunityHub.vue'
import ExperienceSharing from '@/pages/ExperienceSharing.vue'
import WalkingTour from '@/pages/WalkingTour.vue'
import LocalRevitalization from '@/pages/LocalRevitalization.vue'
import LocalEcology from '@/pages/LocalEcology.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/communty-hub', name: 'communty', component: CommunityHub },
  { path: '/experience-sharing', name: 'experience', component: ExperienceSharing },
  { path: '/walking-tour', name: 'walking', component: WalkingTour },
  { path: '/local-revitalization', name: 'revitalization', component: LocalRevitalization },
  { path: '/local-ecology', name: 'ecology', component: LocalEcology },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 使用者按返回鍵時，還原先前捲動位置
      return savedPosition
    } else {
      // 一般跳轉時，捲到最上方
      return { top: 0 }
    }
  }
})

export default router
