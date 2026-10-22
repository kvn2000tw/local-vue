<template>
  <div ref="sectionRef">
    <!-- ✅ 當有選取子元件時，顯示子元件與返回按鈕 -->
    <div v-if="selected" class="content-box">
      <div class="back-button-wrapper">
        <button class="back-button" @click="goBack">← 返回</button>
      </div>
      <component :is="selectedComponent" />
    </div>

    <!-- ✅ 未選取時，顯示標題與卡片/影片網格 -->
    <template v-else>
      <h1>淨灘·南港守護行動</h1>
      <div class="card-grid">
        <div
          v-for="item in cards"
          :key="item.id"
          class="card"
          @click="handleClick(item)"
        >
          <div class="card-image-wrapper">
          <img :src="getImage(item)" :alt="item.title" />
           <span class="card-tag" :class="item.type">
  {{
    item.type === 'youtube'
      ? '影片'
      : item.type === 'external'
      ? '連結'
      : '活動'
  }}
</span>
            <span v-if="item.type === 'youtube'" class="play-icon">▶</span>
          </div>
          
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <h1>濕地保育</h1>
      <div class="card-grid">
        <div
          v-for="item in cards1"
          :key="item.id"
          class="card"
          @click="handleClick(item)"
        >
          <div class="card-image-wrapper">
          <img :src="getImage(item)" :alt="item.title" />
           <span class="card-tag" :class="item.type">
  {{
    item.type === 'youtube'
      ? '影片'
      : item.type === 'external'
      ? '連結'
      : '活動'
  }}
</span>
            <span v-if="item.type === 'youtube'" class="play-icon">▶</span>
          </div>
          
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getCurrentInstance } from 'vue'

// 匯入子元件與 VideoCard
import VideoCard from '@/components/VideoCard.vue'
import OutdoorActivity20260425 from './OutdoorActivity20260425.vue'

const imgBase = getCurrentInstance().appContext.config.globalProperties.$env.apiUrl

const selected = ref(null)
const sectionRef = ref(null)

// 卡片資料
const cards = [
  {
    id: 'outdoorActivity20260425',
    type: 'component',
    img: `${imgBase}/img/2026-04-25/001.jpg`,
    title: '守護行動',
    desc: '425一起淨灘，南港守護行動',
    component: OutdoorActivity20260425
  },
  {
    id: 'yt1',
    type: 'youtube',
    videoId: 'Cs9xvPaetRI',
    title: '志工培訓',
    desc: '1090927科學城社大「海」好有你守護家園淨灘活動400人',
    link: 'https://www.youtube.com/watch?v=Cs9xvPaetRI'
  },
  {
    id: 'yt1',
    type: 'youtube',
    videoId: 'bzvAh7RC1TU',
    title: '故事分享',
    desc: '1081221 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 南港淨灘活動',
    link: 'https://www.youtube.com/watch?v=bzvAh7RC1TU'
  }
]

const cards1 = [
    {
    id: 'yt1',
    type: 'youtube',
    videoId: 'PSUjisAwCp4',
    title: '共融市集',
    desc: '科學城社大璀璨二十111年春線上成果展 1110505公共行動力系列四 東山濕地藝術舞蹈季',
    link: 'https://www.youtube.com/watch?v=PSUjisAwCp4s'
  }
]
function goBack() {
  selected.value = null
}

function handleClick(item) {
  if (item.type === 'component') {
    selected.value = item.id
    sectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else if (item.type === 'youtube' || item.type === 'external') {
    window.open(item.link, '_blank')
  }
}

const selectedComponent = computed(() => {
  const item = cards.find((c) => c.id === selected.value)
  return item?.component || null
})
function getImage(item) {
  if (item.type === 'youtube' && item.videoId) {
    return `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
  }
  return item.img
}

// 點擊卡片觸發
const go = (id) => {
  selected.value = id
  sectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

</script>

<style scoped>
/* 標題置中 */
h1 {
  text-align: center;
  margin-top: 24px;
  margin-bottom: 16px;
}
.card-tag.external {
  background-color: #1e88e5;
}
.section-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 24px 0;
  color: #2c3e50;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0 16px;
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.card-image-wrapper {
  position: relative;
}

.card img {
  aspect-ratio: 4 / 3;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}

.card-tag {
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #3a7c5b;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 600;
}

.card-tag.youtube {
  background-color: #cc0000;
}

.card-tag.component {
  background-color: #3a7c5b;
}

.play-icon {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4px 6px;
  border-radius: 50%;
}

.content-box {
  margin-top: 24px;
  padding: 16px;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 12px;
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

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>