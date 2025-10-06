<template>
  <div style="text-align: center;">
    <h1>優良店家採訪</h1>
    <!-- 圖片使用變數 -->
    <img 
      :src="imgUrl" 
      :alt="imgAlt"
      style="max-width: 400px;"
    />

    <!-- 連結 -->
    <p>
      <a :href="moreLink" target="_blank">
        更多優良店家資訊
      </a>
    </p>
  </div>
</template>


<script setup>
import { ref, getCurrentInstance } from 'vue'

// 取得全域變數
const { appContext } = getCurrentInstance()
const imgBase = appContext.config.globalProperties.$env.apiUrl

// 定義 reactive 變數
const imgUrl = ref(`${imgBase}/img/優良店家.jpg`)
const imgAlt = ref("優良店家採訪 星寶蔥體驗農場")
const moreLink = ref("https://www.s3c.com.tw/content.php?u=5fc85def1402a")
</script>