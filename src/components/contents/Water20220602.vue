<template>
  <div style=" padding: 0 20px;">
<h2 class="title">
  2022/06/02 『探訪冷水坑溪』週四早智慧手機軟體app進階應用班級活動
</h2>

    <h3>國琴老師分享</h3>
                    <p>
駱國琴老師<br>
#親親遊冷水坑溪-<br>
#在地文化<br>
#活動軌跡<br>
111春季1110602<br> 
主題：探訪冷水坑溪<br>
班級：週四早智慧手機軟體app進階應用<br>
帶領老師：駱國琴老師<br>
內容：用手機拍下冷水坑溪的足跡<br>
    <br>                    
『探訪冷水坑溪』班級活動<br>
<br>                        
活動時間： 111年6月2日（星期四）上午9:00-12:00<br>
集合地點： 關新教室<br>
探訪路徑： 長春街(中油站) → 光復路一段252巷 → 鎮安橋 → 靜心湖<br>
                    <br>    
活動目標與意義<br>
此次活動由駱國琴老師帶領，響應李世英校長的倡議，透過實地走訪冷水坑溪，讓學員深入了解新竹在地文化與生活面貌。<br>
冷水坑溪始於水仙，流淌至靜心湖，沿途灌溉並滋養著新竹的過去與現在，是新竹的重要生命脈絡之一。<br>
                    <br>    
冷水坑溪的名字取自清朝時期，因溪水清澈沁脾而得名「靈泉」。它原為一條天然溪流，供應附近居民的生活用水。<br>
如今，隨著時代變遷，溪流周邊鋪設了水泥堤岸，但它仍然承載著豐富的歷史記憶與人文故事。<br>
                    <br>    
實地探訪的影響<br>
透過此次探訪活動，學員們不僅認識了冷水坑溪的過去與現在，更從中感受到自然與文化的交融，提升了對環境保護的意識與對在地歷史的認同感。<br>
冷水坑溪的生命力提醒我們珍惜自然資源，並共同努力保存在地文化。<br>
              <br>          
未來規劃<br>
活動結束後，學員們紛紛表達了深刻的感觸，希望未來能繼續舉辦類似活動，例如：<br>
設計冷水坑溪生態導覽，邀請更多人認識它的美麗與故事。<br>
帶領家人朋友一同走訪，分享冷水坑溪的點滴與記憶。<br>
以冷水坑溪為主題，製作更多文化與歷史紀錄。<br>
感謝每位學員的熱情參與與支持，期待在下一次活動中再次相聚，共同探索新竹的美好！<br>
                    </p>
 <div class="photo-section">
  <h5>活動照片</h5>

<!-- 第一排：4 張 -->
<div class="photo-row">
  <div class="photo-col"><img :src="`${imgBase}/img/2022-06-02/001.jpg`" alt="探訪冷水坑溪"></div>
  <div class="photo-col"><img :src="`${imgBase}/img/2022-06-02/007.jpg`" alt="探訪冷水坑溪"></div>
  <div class="photo-col"><img :src="`${imgBase}/img/2022-06-02/003.jpg`" alt="探訪冷水坑溪"></div>
</div>

<!-- 第二排：3 張 -->
<div class="photo-row">
 
  <div class="photo-col"><img :src="`${imgBase}/img/2022-06-02/004.jpg`" alt="探訪冷水坑溪"></div>
  <div class="photo-col"><img :src="`${imgBase}/img/2022-06-02/005.jpg`" alt="探訪冷水坑溪"></div>
  <div class="photo-col"><img :src="`${imgBase}/img/2022-06-02/006.jpg`" alt="探訪冷水坑溪"></div>
</div>


</div>
</div>
</template>
<script setup>
import { getCurrentInstance } from 'vue'
import './Common.css'
const imgBase = getCurrentInstance().appContext.config.globalProperties.$env.apiUrl
</script>
<style>
.title {
  white-space: nowrap;        /* 固定一行 */
  overflow: hidden;           /* 超出範圍隱藏 */
  text-overflow: ellipsis;    /* 超出用 ... 表示 */
  font-size: clamp(16px, 2vw, 20px); 
  /* 會根據螢幕自動縮放：最小16px，最大24px */
}
.photo-section {
  margin: 20px 0;
}

.photo-section h5 {
  margin-bottom: 15px;
}

.photo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px; /* 圖片間距 */
  justify-content: center;
}

.photo-col {
  flex: 1 1 calc(25% - 15px); /* 預設 4 欄 */
  max-width: calc(25% - 15px);
}

.photo-col img {
  width: 100%;       /* 填滿容器寬度 */
  height: auto;      /* 自動計算高度 → 保持比例 */
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

/* 3 欄平均分配 */
.photo-row:has(.photo-col:nth-child(3)) .photo-col {
  flex: 1 1 calc(33.33% - 15px);
  max-width: calc(33.33% - 15px);
}

/* 平板以下：一排 2 張 */
@media (max-width: 768px) {
  .photo-col {
    flex: 1 1 calc(50% - 15px);
    max-width: calc(50% - 15px);
  }
}

/* 手機以下：一排 1 張 */
@media (max-width: 480px) {
  .photo-col {
    flex: 1 1 100%;
    max-width: 100%;
  }
}


</style>