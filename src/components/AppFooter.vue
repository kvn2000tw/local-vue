<template>
  <footer class="footer">
    © {{ currentYear }} 新竹市科學城社區大學
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// 取得當前年份
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 24px 0;
  color: #777;
  background-color: #f5f5f5; /* 可自行調整底色 */
  font-size: 14px;
}
</style>
