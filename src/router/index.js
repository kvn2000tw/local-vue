// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import CommunityHub from '@/pages/CommunityHub.vue'
import ExperienceSharing from '@/pages/ExperienceSharing.vue'
import WalkingTour from '@/pages/WalkingTour.vue'
import LocalRevitalization from '@/pages/LocalRevitalization.vue'
import LocalEcology from '@/pages/LocalEcology.vue'
import Mountain20240724 from '@/pages/Mountain20240724.vue'
import Mountain20240804 from '@/pages/Mountain20240804.vue'
import Mountain20240823 from '@/pages/Mountain20240823.vue'
import Mountain20241012 from '@/pages/Mountain20241012.vue'
import Mountain20241023 from '@/pages/Mountain20241023.vue'
import Mountain20241103 from '@/pages/Mountain20241103.vue'
import Mountain20241117 from '@/pages/Mountain20241117.vue'
import Mountain20241124 from '@/pages/Mountain20241124.vue'
import Mountain20241228 from '@/pages/Mountain20241228.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/communty-hub', name: 'communty', component: CommunityHub },
  { path: '/experience-sharing', name: 'experience', component: ExperienceSharing },
  { path: '/walking-tour', name: 'walking', component: WalkingTour },
  { path: '/local-revitalization', name: 'revitalization', component: LocalRevitalization },
  { path: '/local-ecology', name: 'ecology', component: LocalEcology },
  { path: '/mountain-2024-07-24', name: 'mountain20240724', component: Mountain20240724 },
  { path: '/mountain-2024-08-04', name: 'mountain20240804', component: Mountain20240804 },
  { path: '/mountain-2024-08-23', name: 'mountain20240823', component: Mountain20240823 },
  { path: '/mountain-2024-10-12', name: 'mountain20241012', component: Mountain20241012 },
  { path: '/mountain-2024-10-23', name: 'mountain20241023', component: Mountain20241023 },
  { path: '/mountain-2024-11-03', name: 'mountain20241103', component: Mountain20241103 },
  { path: '/mountain-2024-11-17', name: 'mountain20241117', component: Mountain20241117 },
  { path: '/mountain-2024-11-24', name: 'mountain20241124', component: Mountain20241124 },
  { path: '/mountain-2024-12-28', name: 'mountain20241228', component: Mountain20241228 },

]

const router = createRouter({
  history: createWebHistory(),
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
