<template>
  <section class="section-container">
    <div 
      v-for="(card, index) in cards" 
      :key="index" 
      class="card" 
      :id="card.id" 
      @click="go(card.route)"
    >
      <h3>{{ card.title }}</h3>
      <p>{{ card.desc }}</p>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 卡片資料
const cards = [
  { id: 'culture', title: '社區夥伴', desc: '人物專訪、社區夥伴、人才師資庫。', route: 'communty' },
  { id: 'wisdom', title: '經驗觀點', desc: '教師分享、活動分享、學員分享。', route: 'experience' },
  { id: 'language', title: '走讀新竹', desc: '山林系列、水資源系列。', route: 'walking' },
  { id: 'nature', title: '地方創生', desc: '優良店家採訪', route: 'revitalization' },
  { id: 'community', title: '在地生態', desc: '濕地保育、溪流河域。', route: 'ecology' }
]

// 導航方法
const go = (routeName) => {
  router.push({ name: routeName })
}
</script>

<style scoped>
.section-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 20px;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 150px;
  margin: 15px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card h3 {
  color: #3a7c5b;
  font-size: 16px;
  margin-bottom: 8px;
}

.card p {
  font-size: 14px;
  line-height: 1.4;
}
</style>
