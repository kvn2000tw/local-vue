
<template>
  <div>
    <h1>濕地保育</h1>
    <div class="yt-row">
      <VideoCard
        v-for="(video, index) in videos"
        :key="index"
        :videoId="video.videoId"
        :title="video.title"
        :caption="video.caption"
      />
    </div>
  </div>
</template>

<script setup>
import VideoCard from '@/components/VideoCard.vue'

const videos = [
  {
    videoId: 'PSUjisAwCp4',
    title: '共融市集',
    caption: '科學城社大璀璨二十111年春線上成果展 1110505公共行動力系列四 東山濕地藝術舞蹈季'
  },
  {
    videoId: 'Cs9xvPaetRI',
    title: '志工培訓',
    caption: '1090927科學城社大「海」好有你守護家園淨灘活動400人'
  },
  {
    videoId: 'bzvAh7RC1TU',
    title: '故事分享',
    caption: '1081221 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 南港淨灘活動'
  },

]
</script>

<style scoped>
.yt-row {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
