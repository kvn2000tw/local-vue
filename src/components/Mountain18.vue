<template>
   <div ref="sectionRef">
    <!-- 卡片容器 -->

    <!-- ✅ 顯示對應的子元件 -->
    <div v-if="selected" class="content-box">
            <div class="back-button-wrapper">
      <button class="back-button" @click="goBack">← 返回</button>
    </div>

      <component :is="selectedComponent" />
    </div>
    <template v-else>
    <div class="card-grid">
      <div
        v-for="item in cards"
        :key="item.id"
        class="card"
        @click="go(item.id)"
      >
        <img :src="item.img" :alt="item.title" />
        <h5>{{ item.title }}</h5>
        <p>{{ item.desc }}</p>
      </div>
    </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 匯入各個子元件
import Mountain20240724 from './contents/Mountain20240724.vue'
import Mountain20240804 from './contents/Mountain20240804.vue'
import Mountain20240823 from './contents/Mountain20240823.vue'
import Mountain20241012 from './contents/Mountain20241012.vue'
import Mountain20241023 from './contents/Mountain20241023.vue'
import Mountain20241103 from './contents/Mountain20241103.vue'
import Mountain20241117 from './contents/Mountain20241117.vue'
import Mountain20241124 from './contents/Mountain20241124.vue'
import Mountain20241228 from './contents/Mountain20241228.vue'

function goBack() {
  selected.value = null;
}
// 卡片資料表：id 與對應元件
const cards = [
  {
    id: 'mountain20240724',
    img: '/img/2024-07-04/004.jpg',
    title: '十八尖山山林教育系列',
    desc: '歷史與植物探索',
    component: Mountain20240724
  },
  {
    id: 'mountain20240804',
    img: '/img/2024-08-04/002.jpg',
    title: '十八尖山山林教育系列',
    desc: '十八尖山走讀歷史&手機APP辨識植物探索-探勘篇',
    component: Mountain20240804
  },
  {
    id: 'mountain20240823',
    img: '/img/2024-08-23/001.jpg',
    title: '十八尖山山林教育系列',
    desc: '十八尖山走讀歷史&手機APP辨識植物探索',
    component: Mountain20240823
  },
  {
    id: 'mountain20241012',
    img: '/img/2024-10-12/002.jpg',
    title: '十八尖山山林教育系列',
    desc: '石觀音探訪與茶道文化體驗篇',
    component: Mountain20241012
  },
  {
    id: 'mountain20241023',
    img: '/img/2024-10-23/003.jpg',
    title: '十八尖山山林教育系列',
    desc: '山林茶趣篇',
    component: Mountain20241023
  },
  {
    id: 'mountain20241103',
    img: '/img/2024-11-03/007.jpg',
    title: '十八尖山山林教育系列',
    desc: '十八尖山山林系列雅韻篇',
    component: Mountain20241103
  },
  {
    id: 'mountain20241117',
    img: '/img/2024-11-17/004.jpg',
    title: '十八尖山山林教育系列',
    desc: '十八尖山山林系列藝術篇',
    component: Mountain20241117
  },
  {
    id: 'mountain20241124',
    img: '/img/2024-11-24/001.jpg',
    title: '十八尖山山林教育系列',
    desc: '山林健康有氧篇',
    component: Mountain20241124
  },
  {
    id: 'mountain20241228',
    img: '/img/2024-12-28/018.jpg',
    title: '十八尖山山林教育系列',
    desc: '永續發展與生活實踐十八尖山成果展',
    component: Mountain20241228
  }
]

const selected = ref(null)
const sectionRef = ref(null)
const go = (id) => {
  selected.value = id
  // 滾動到組件本身的位置
  sectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const selectedComponent = computed(() => {
  const item = cards.find((c) => c.id === selected.value)
  return item ? item.component : null
})
</script>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
  text-align: center;
  font-weight: 600;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.card img {
  aspect-ratio: 4 / 3;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}
.content-box {
  margin-top: 24px;
  padding: 16px;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 12px;
}
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.back-button-wrapper {
  padding: 10px 20px;
}

.back-button {
  background-color: #3a7c5b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
}
.back-button:hover {
  background-color: #2e5e44;
}
</style>
