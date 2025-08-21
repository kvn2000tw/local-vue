<template>
  <nav class="nav">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <RouterLink :to="{ name: item.route }">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '新竹市科學城社區大學 - 地方在地知識學'
  }
})

// 導航選單資料
const menuItems = [
  { label: '首頁', route: 'home' },
  { label: '社區夥伴', route: 'communty' },
  { label: '經驗觀點', route: 'experience' },
  { label: '走讀新竹', route: 'walking' },
  { label: '地方創生', route: 'revitalization' },
  { label: '在地生態', route: 'ecology' }
]
</script>

<style scoped>
.nav {
  color: white;
  background-color: #3a7c5b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 12px 16px;
  position: sticky;
  top: 0;
  z-index: 10;
}
.nav h1 {
  font-size: 18px;
  margin: 6px 0;
}
.nav ul {
  list-style: none;
  display: flex;
  gap: 12px;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}
.nav a {
  text-decoration: none;
  color: white;
  font-weight: 600;
}
.nav a:hover {
  text-decoration: underline;
  color: #f0f0f0;
}
</style>
