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
import Water20220602 from './contents/Water20220602.vue'
import Water20221110 from './contents/Water20221110.vue'
import Water20221211 from './contents/Water20221211.vue'
import Water20230506 from './contents/Water20230506.vue'
import Water20240504 from './contents/Water20240504.vue'
import Water20250503 from './contents/Water20250503.vue'

function goBack() {
  selected.value = null;
}
// 卡片資料表：id 與對應元件
const cards = [
  {
    id: 'water20220602',
    img: '/img/2022-06-02/002.jpg',
    title: '冷水坑溪山水系列',
    desc: '探訪冷水坑溪',
    component: Water20220602
  },
  {
    id: 'water20221110',
    img: '/img/2022-11-10/001.jpg',
    title: '冷水坑溪山水系列',
    desc: '爺爺、奶奶暢遊冷水坑溪岸的靜心湖',
    component: Water20221110
  },
  {
    id: 'water20221211',
    img: '/img/2022-12-11/level1/006.jpeg',
    title: '冷水坑溪山水系列',
    desc: '冷水坑溪親子遊',
    component: Water20221211
  },
  {
    id: 'water20230506',
    img: '/img/2023-05-06/001.jpg',
    title: '冷水坑溪山水系列',
    desc: '冷水坑溪家庭大健走',
    component: Water20230506
  },
  {
    id: 'water20240504',
    img: '/img/2024-05-04/006.jpg',
    title: '冷水坑溪山水系列',
    desc: '走訪冷水坑溪寺廟之旅',
    component: Water20240504
  },
  {
    id: 'water20250503',
    img: '/img/2024-05-04/006.jpg',
    title: '冷水坑溪山水系列',
    desc: '冷水坑溪賞荷會',
    component: Water20250503
  },
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
  transition: background-color 0.2s ease;
}
.back-button:hover {
  background-color: #2e5e44;
}
</style>
