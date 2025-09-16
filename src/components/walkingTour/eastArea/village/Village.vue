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
import { getCurrentInstance } from 'vue'

const imgBase = getCurrentInstance().appContext.config.globalProperties.$env.apiUrl

// 匯入各個子元件
import Village20250913 from './Village20250913.vue'

function goBack() {
  selected.value = null;
}
// 卡片資料表：id 與對應元件
const cards = [
  {
    id: 'village20250913',
    img: `${imgBase}/img/2022-06-02/002.jpg`,
    title: '六大聯里系列',
    desc: '建功聯里走讀學堂系列3',
    component: Village20250913
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
