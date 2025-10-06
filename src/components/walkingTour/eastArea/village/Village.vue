<template>
  <div ref="sectionRef">
    <!-- 顯示子元件 -->
    <div v-if="selected" class="content-box">
      <div class="back-button-wrapper">
        <button class="back-button" @click="goBack">← 返回</button>
      </div>
      <component :is="selectedComponent" />
    </div>

    <!-- 顯示卡片 -->
    <template v-else>
      <h2 class="section-title">社區內容總覽</h2>
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
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getCurrentInstance } from 'vue'

// 匯入活動元件
import Village20250913 from './Village20250913.vue'

const imgBase = getCurrentInstance().appContext.config.globalProperties.$env.apiUrl

// 卡片資料
const cards = [
  {
    id: 'village20250913',
    type: 'component',
    img: `${imgBase}/img/2025-09-13/011.jpg`,
    title: '六大聯里系列',
    desc: '建功聯里走讀學堂系列3',
    component: Village20250913
  },
  {
    id: 'village20250913',
    type: 'external',
    img: `${imgBase}/img/六大聯里系列/建功聯里走讀學堂系列2.jpg`,
    title: '六大聯里系列',
    desc: '探索戰爭與和平的記憶 新竹市「建功聯里走讀學堂系列2」登場',
    link: 'https://www.s3c.com.tw/content.php?u=68cc002958672'
  },
  {
    id: 'village20250913',
    type: 'external',
    img: `${imgBase}/img/六大聯里系列/建功聯里走讀學堂.jpg`,
    title: '六大聯里系列',
    desc: '新竹市東區舉辦「建功聯里走讀學堂」 深入探索竹籬笆歷史文化',
    link: 'https://www.s3c.com.tw/content.php?u=68cbf97ac925d'
  },
  {
    id: 'yt1',
    type: 'youtube',
    videoId: 'Sv_FSiz_wDk',
    title: '社區紀錄片',
    desc: '1130723 113年社區營造計畫 東勢聯里走讀學堂系列3：探索東勢風華~綠色廊道 成果影片',
    link: 'https://www.youtube.com/watch?v=Sv_FSiz_wDk'
  },
  {
    id: 'yt1',
    type: 'youtube',
    videoId: 'OIV38AnBzN4',
    title: '社區紀錄片',
    desc: '1130719 113年社區營造計畫 東勢聯里走讀學堂系列2：探索東勢風華~文化體驗 成果影片',
    link: 'https://www.youtube.com/watch?v=OIV38AnBzN4'
  },
  {
    id: 'yt1',
    type: 'youtube',
    videoId: '1nMGY8dVJNo',
    title: '社區紀錄片',
    desc: '1130716 113年社區營造計畫 東勢聯里走讀學堂系列1：探索東勢風華~匠心獨運 成果影片',
    link: 'https://www.youtube.com/watch?v=1nMGY8dVJNo'
  },
]

const selected = ref(null)
const sectionRef = ref(null)

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
</script>

<style scoped>
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
