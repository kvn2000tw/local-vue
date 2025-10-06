<template>
  <section class="info-card" role="region" :aria-labelledby="infoId">
    <!-- 圖片區塊 -->
    <img
      class="info-image"
      :src="imageUrl"
      :alt="imageAlt"
    />

    <!-- 標題與內容 -->
    <h2 :id="infoId" class="info-title">{{ title }}</h2>
    <p class="info-text">{{ description }}</p>

    <!-- 插槽區塊（可選） -->
    <slot name="extra" />

    <!-- 按鈕 -->
    <a
      class="info-button"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`前往：${title}`"
    >
      {{ buttonText }}
    </a>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { getCurrentInstance } from 'vue'

const { appContext } = getCurrentInstance()
const imgBase = appContext.config.globalProperties.$env.apiUrl

const props = defineProps({
  title: {
    type: String,
    default: '學習收藏'
  },
  description: {
    type: String,
    default: '教師分享、學員分享、活動分享、學報分享與學者分享等精彩內容。'
  },
  link: {
    type: String,
    default: 'https://www.s3c.com.tw/content.php?id=5f98c4291f757#'
  },
  buttonText: {
    type: String,
    default: '前往連結'
  },
  imagePath: {
    type: String,
    default: '/img/學習收藏.png'
  },
  imageAlt: {
    type: String,
    default: '學習收藏主視覺插圖'
  }
})

const imageUrl = computed(() => `${imgBase}${props.imagePath}`)
const infoId = computed(() => `info-${props.title.replace(/\s+/g, '-')}`)
</script>

<style scoped>
.info-card {
  background: #f9fafe;
  border: 1px solid #dbe2ef;
  border-radius: 12px;
  padding: 24px;
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.info-image {
  width: 100%;
  max-width: 320px;
  margin-bottom: 16px;
  border-radius: 8px;
}

.info-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1f2d3d;
}

.info-text {
  font-size: 16px;
  color: #3c4858;
  margin-bottom: 20px;
}

.info-button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #3a7c5b;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.info-button:hover {
  background-color: #2e6a4f;
}
</style>
