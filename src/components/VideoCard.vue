<template>
  <div class="yt-wrap">
    <a
      :href="`https://www.youtube.com/watch?v=${videoId}`"
      target="_blank"
      rel="noopener noreferrer"
      class="yt-link"
    >
      <img
        :src="`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`"
        :alt="title"
        class="yt-thumbnail"
      />
    </a>
    <p class="yt-caption">{{ caption }}</p>
  </div>
</template>

<script setup>
defineProps({
  videoId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'YouTube video'
  },
  caption: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.yt-wrap {
  /* 改為與 card 相同的固定寬度與尺寸控制 */
  width: 300px;
  flex: 0 0 300px;
  box-sizing: border-box;
  
  /* 讓背景、邊框與內距跟 card 一致 */
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
  text-align: center;
  font-weight: 600;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.yt-wrap:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.yt-link {
  display: block;
  position: relative;
  aspect-ratio: 16 / 9; /* 👈 確保 YouTube 縮圖也是 16 / 9 */
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 8px;
}

.yt-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 確保圖片填滿且不變形 */
}

.yt-caption {
  margin-top: 0;
  font-size: 14px;
  color: #444;
  font-weight: normal; /* 讓內文說明字體粗細自然 */
  text-align: left;    /* 也可以依需求改為置中 text-align: center; */
}
</style>