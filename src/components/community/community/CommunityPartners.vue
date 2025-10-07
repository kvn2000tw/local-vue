<template>
  <div>
   
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
    videoId: 'PtmcsxU2WOI',
    title: '共融市集',
    caption: '1130618 113年東區區域共好 東勢職人、文化、環境深度走讀之旅設計工作坊 成果影片'
  },
  {
    videoId: 'eiVL3puNUo4',
    title: '志工培訓',
    caption: '1081220 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 一品大觀'
  },
  {
    videoId: '31d3hjERD-s',
    title: '故事分享',
    caption: '1081214 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 綠水里集會所'
  },
  {
    videoId: '1U_TPUlcFHQ',
    title: '故事分享',
    caption: '1081224 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 芬蘭社區'
  },
  {
    videoId: 'qnk9Fa5yveM',
    title: '故事分享',
    caption: '1081222 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 東方文華'
  },
  {
    videoId: 'ehNw_vL89g0',
    title: '故事分享',
    caption: '1081221 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 華夏金城'
  },
  {
    videoId: 'R-fMKG6r2SI',
    title: '故事分享',
    caption: '1081214 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 北歐社區'
  },
  {
    videoId: '4FNDR8bNtE4',
    title: '故事分享',
    caption: '1081208 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 清大雙星'
  },
  {
    videoId: 'e4d66i5Ceys',
    title: '故事分享',
    caption: '1081228 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 麗池公園 九曲橋'
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
