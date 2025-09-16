<template>
  <div class="section-container">
    <h2 class="section-title">在地人物故事</h2>
    <p class="section-description">
      深入訪談在地重要人物，了解他們的故事與貢獻。
    </p>

    <!-- 卡片列表 -->
    <div class="card-grid" v-if="!activePerson">
      <div
        class="card"
        v-for="person in people"
        :key="person.id"
        @click="activePerson = person"
      >
        <img :src="person.image" :alt="person.name" class="card-image" />
        <h3 class="card-name">{{ person.name }}</h3>
        <p class="card-role">{{ person.role }}</p>
      </div>
    </div>

  <!-- 詳細內容 -->
<div class="detail-view" v-else>
  <button class="back-btn" @click="activePerson = null">← 返回列表</button>
  <component :is="activePerson.component" />
</div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import CoolWater from './content/CoolWater.vue'
//import LengShuiKeng from '@/components/interviews/JuanCun.vue'
//import LengShuiKeng from '@/components/interviews/NanGang.vue'
import { getCurrentInstance } from 'vue'

const imgBase = getCurrentInstance().appContext.config.globalProperties.$env.apiUrl

const activePerson = ref(null)

const people = [
  {
    id: 'lengshuikeng',
    name: '冷水坑溪',
    role: '深入訪談在地重要人物，了解他們的故事與貢獻。',
    image: `${imgBase}/img/清咸豐九年淡新檔案金山面一代埔地圖說.png`,
    component: CoolWater,
  },
  {
    id: 'juancun',
    name: '眷村採訪',
    role: '深入眷村文化，採訪在地居民，記錄珍貴的歷史記憶與生活故事。',
    image: `${imgBase}/img/眷村採訪.png`,
    component: null,
  },
  {
    id: 'nangang',
    name: '南港採訪',
    role: '走訪南港社區，採訪在地人物，了解南港社區的發展歷程與文化特色。',
    image: `${imgBase}/img/社區採訪.png`,
    component: null,
  },
]
</script>

<style scoped>
.section-container {
  max-width: 960px;
  margin: 40px auto;
  padding: 0 20px;
  text-align: center;
}

.section-title {
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 10px;
}

.section-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

.card-grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: center;
  cursor: pointer;
}

.card {
  width: 280px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
}

.card-image {
  aspect-ratio: 3 / 2;
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
}

.card-name {
  font-size: 20px;
  color: #3a7c5b;
  margin-bottom: 4px;
}

.card-role {
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
}

.detail-view {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.detail-image {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 16px;
}

.detail-name {
  font-size: 24px;
  color: #3a7c5b;
  margin-bottom: 8px;
}

.detail-role {
  font-size: 16px;
  color: #666;
  margin-bottom: 12px;
}

.detail-quote {
  font-size: 16px;
  color: #444;
  font-style: italic;
}

.back-btn {
  background: none;
  border: none;
  color: #3a7c5b;
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
