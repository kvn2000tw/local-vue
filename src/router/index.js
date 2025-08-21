// src/router/index.js
import Home from '@/pages/Home.vue'
import CommunityHub from '@/pages/CommunityHub.vue'
import ExperienceSharing from '@/pages/ExperienceSharing.vue'
import WalkingTour from '@/pages/WalkingTour.vue'
import LocalRevitalization from '@/pages/LocalRevitalization.vue'
import LocalEcology from '@/pages/LocalEcology.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/communty-hub', name: 'communty', component: CommunityHub },
  { path: '/experience-sharing', name: 'experience', component: ExperienceSharing },
  { path: '/walking-tour', name: 'walking', component: WalkingTour },
  { path: '/local-revitalization', name: 'revitalization', component: LocalRevitalization },
  { path: '/local-ecology', name: 'ecology', component: LocalEcology },
]