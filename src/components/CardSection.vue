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
  { id: 'community', title: '在地生態', desc: '濕地保育、溪流河域。', route: 'ecology' },
  { id: 'forum', title: '公論週活動', desc: '講座論壇、公民參與、議題研討。', route: 'forum' }
]

// 導航方法
const go = (routeName) => {
  router.push({ name: routeName })
}
</script>

<style scoped>
.section-container {
  display: flex;
  padding: 40px 20px;
  gap: 15px;
  justify-content: center;
}

/* 預設（手機版）：自動換行 */
.section-container {
  flex-wrap: wrap; 
}

/* 桌機版（螢幕寬度 >= 768px 時）：不換行、可橫向捲動 */
@media (min-width: 768px) {
  .section-container {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start; /* 桌機靠左或置中皆可 */
  }
  
  .card {
    flex-shrink: 0; /* 確保桌機不換行時，卡片不會被擠壓變形 */
  }
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 150px;
  margin: 0; /* 用 gap 取代 margin 較整齊 */
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