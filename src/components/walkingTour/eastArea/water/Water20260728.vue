<template>
  <div style=" padding: 0 20px;">
    <h2 class="title">2026/07/28 夏令營科學城冷水坑溪流域 </h2>
    
<section>
<div class="hero">
<h1>風城 River Lab：流域VR創作營</h1>
<p>冷水坑溪流域紀錄與心得分享</p>
</div>
 
<div class="container">
 
<p>
在115年暑假期間，社團法人社區大學全國促進會（全促會）與大新竹區多所社區大學跨校合作，
共同為高中職學生規劃科技環境教育營隊「風城 River Lab：流域VR創作營」。
</p>
 
<p>
本次營隊由科學城社區大學負責冷水坑溪流域的導覽內容，
並邀請駱國琴、吳兆祥及羅瑞福三位講師擔任解說員。
為了讓活動內容更加完善，科學城社大主任、三位講師以及全促會工作人員於115年6月24日下午進行實地場勘，
親自走訪冷水坑溪流域沿線的重要景點，確認導覽路線與活動流程。
</p>
 
<h2>路線</h2>
 
<div class="route">
金山寺 → 靜心湖太極廣場 → 蘇式庭園 → 荷花池 → 水閘門 → 鎮安宮 → 長春公園
</div>
 
<p>
沿途除了觀察景點特色與周遭環境外，也針對活動當天可能遇到的天候、
交通、安全性及學員動線等問題進行討論，並擬定相關備案，
希望讓營隊進行得更加順利。
</p>
 
<h2>解說工作分配</h2>
 
<ul>
<li><strong>金山寺</strong>：駱國琴老師</li>
<li><strong>靜心湖及沿途景點</strong>：吳兆祥老師</li>
<li><strong>鎮安宮</strong>：羅瑞福老師</li>
</ul>
 
<p>
透過實地走讀，不僅能夠更清楚掌握各景點的特色與故事，
也能思考如何將環境教育、地方文化與科技應用結合，
讓學員在創作過程中更深入理解流域與社區發展之間的關聯。
</p>
 
<h2>VR創作與流域探索</h2>
 
<p>
本次活動的核心在於VR創作，希望學員以冷水坑溪流域為主題，
設計一套具有互動性與沉浸感的VR導覽地圖。
透過實際走訪與觀察，將沿線的人文歷史、自然環境與水域特色轉化為數位內容，
讓參與者能以不同的方式認識在地環境。
</p>
 
<div class="highlight">
同一個主題，若能結合不同的媒介、技術或創作形式，
往往能展現出全新的樣貌與價值。
</div>
 
<p>
在參與規劃與場勘的過程中，我認為一個流域故事不只是環境教育教材，
它也可以成為文化導覽的素材、數位地圖的內容，
甚至是VR沉浸式體驗中的探索場域。
當不同元素彼此結合時，便會產生新的創作可能。
</p>
 
<h2>心得與反思</h2>
 
<p>
冷水坑溪多年來累積了豐富的活動成果與在地故事，
而這次VR創作營則提供了一種全新的詮釋方式。
透過科技、文化與環境教育的跨域融合，
不僅讓既有的流域教材獲得新的生命力，
也讓我體會到創新未必來自全新的主題，
而是來自不同元素之間的重新組合與連結。
</p>
 
<p>
當熟悉的環境透過新的技術被重新呈現，
便能開啟更多想像空間，激發更多元的學習與創作能量。
這次踏查不只是活動前的準備工作，
更是一個重新認識冷水坑溪的過程。
</p>
 
<p>
期待未來透過學員的創意與科技應用，
讓更多人看見這條溪流的故事，
並從中理解人文、環境與生活之間密不可分的關係。
</p>
 
</div></section>

 <div class="photo-section">
  <h5>活動照片</h5>

<div class="gallery">
    <div class="photo-col" v-for="(photo, index) in photos" :key="index">
      <img :src="photo.src" :alt="photo.alt" />
    </div>
  </div>

  </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const imgBase = instance?.appContext.config.globalProperties.$env.apiUrl

const photos = [
  { src: `${imgBase}/img/2026-07-28/005.jpg`, alt: "冷水坑溪流域VR創作營" },
  { src: `${imgBase}/img/2026-07-28/003.jpg`, alt: "冷水坑溪流域VR創作營" },
  { src: `${imgBase}/img/2026-07-28/004.jpg`, alt: "冷水坑溪流域VR創作營" },
  { src: `${imgBase}/img/2026-07-28/002.jpg`, alt: "冷水坑溪流域VR創作營" },
  { src: `${imgBase}/img/2026-07-28/006.jpg`, alt: "冷水坑溪流域VR創作營" },
  { src: `${imgBase}/img/2026-07-28/007.jpg`, alt: "冷水坑溪流域VR創作營" },
  

]
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* 圖片間距 */
  background: transparent; /* 背景完全透明 */
}

/* 每張圖片框大小一致 */
.photo-col {
  flex: 0 0 calc(33.33% - 10px); /* 桌機每行三張 */
  max-width: calc(33.33% - 10px);
}

.photo-col img {
  width: 100%;
  height: 300px;       /* 高度固定 */
  object-fit: contain;  /* 保持比例，不變形 */
  border: none;         /* 去掉邊框 */
  background: transparent; /* 背景透明 */
  display: block;
}

/* 平板每行兩張 */
@media (max-width: 1024px) {
  .photo-col {
    flex: 0 0 calc(50% - 10px);
    max-width: calc(50% - 10px);
  }
}

/* 手機每行一張 */
@media (max-width: 480px) {
  .photo-col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>