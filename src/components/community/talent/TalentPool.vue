<template>
  <div>
    <h1>人材師資庫</h1>
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
    videoId: '3knvIkMO2qA',
    title: '共融市集',
    caption: '1130503 113春公共論壇週 家庭收納術~打造乾淨居家環境'
  },
  {
    videoId: 'brf8UHJsTaA',
    title: '志工培訓',
    caption: '1130502 113春公共論壇週 由減碳邁向循環經濟'
  },
  {
    videoId: '09JWfeTcNsQ',
    title: '故事分享',
    caption: '1130501 113春公共論壇週 通用設計~長輩居家環境營造'
  },
    {
    videoId: 'LxDfsloN0mY',
    title: '共融市集',
    caption: '1130430 113春44學期公共論壇週 農域體驗~大湖庄希望農場+實驗市集 成果影片'
  },
  {
    videoId: 'Hw-ZkcUgsYI',
    title: '志工培訓',
    caption: '1130430 113春公共論壇週 記憶中的家鄉味~食物民主運動'
  },
  {
    videoId: 'RXTrxUBdBc0',
    title: '故事分享',
    caption: '1130429 113春公共論壇週 理財桌遊~財富自由 成果影片'
  },
  {
    videoId: '0zkCjlde_Uw',
    title: '故事分享',
    caption: '科學城全民共學系列七 手作分享篇 蜂蜜檸檬DIY 吳文英老師'
  },
  {
    videoId: 'WJtZLuazHXk',
    title: '故事分享',
    caption: '科學城全民共學系列三 科技生活篇 智慧手機輕鬆學～Line 視訊共賞You tube影片、共享畫面 新功能 駱國琴老師'
  },
  {
    videoId: 'Sik8-8dM_VA',
    title: '故事分享',
    caption: '科學城全民共學系列一 養生食物篇 香草創意料理DIY 課程介紹 楊翠娥老師'
  },
  {
    videoId: 'S1RmUSzS57U',
    title: '故事分享',
    caption: '科學城全民共學系列二 手作分享篇 手作分享動動手 孵綠豆芽 吳文英老師'
  },
  {
    videoId: 'qMOtxBpGEnM',
    title: '故事分享',
    caption: '科學城全民共學系列六 科學玩家篇 科學五分鐘方泡泡 最小表面積 謝迺岳老師'
  },
  {
    videoId: 'hkaaaOG0hFw',
    title: '故事分享',
    caption: '科學城全民共學系列二 手作分享篇 手作分享 第六篇 つまみ細工 風鈴金魚 劉雅婷老師'
  },
  {
    videoId: 'u_4Bsrr6W1c',
    title: '故事分享',
    caption: '科學城全民共學系列二 手作分享篇 手作分享 蛋盒的故事 蕭瑞玲老師'
  },
  {
    videoId: '5R9otYR_0Po',
    title: '故事分享',
    caption: '科學城全民共學系列二 手作分享篇 紅樓十二花影 黃子娟老師'
  },
  {
    videoId: '3eVy2oronv8',
    title: '故事分享',
    caption: '科學城全民共學系列七 音樂舒壓篇 「千風之歌」 陳億芯老師'
  },
  {
    videoId: 'mkOnLEHulCA',
    title: '故事分享',
    caption: '科學城全民共學系列七 音樂舒壓篇 「你的行李」口琴 陳奕翔老師'
  },
  {
    videoId: 'xK1lysVxU_g',
    title: '故事分享',
    caption: '科學城全民共學系列八 生活美學篇 藝起Play．粉彩 張如良老師'
  },
  {
    videoId: '5jKr6PeQQlY',
    title: '故事分享',
    caption: '科學城全民共學系列二 手作分享篇 玫瑰花戒指耳環針式夾式 張雪鳳老師'
  },
  {
    videoId: '8LGqvtpBHyY',
    title: '故事分享',
    caption: '科學城全民共學系列二 手作分享篇 奶油大理石蛋糕教學 黃國強老師'
  },
  {
    videoId: 'FIWx8CHuW7w',
    title: '故事分享',
    caption: '科學城全民共學系列五 養生保健篇 太極美學 鄭子太極拳三十七式 基本功 站樁 介紹與示範 林建宏老師'
  },
  {
    videoId: '8ovLZIvWLyg',
    title: '故事分享',
    caption: '科學成全民共學系列六 科學玩家篇 科學五分鐘 搖錢樹、平方斥力場、氣球 謝迺岳老師'
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
