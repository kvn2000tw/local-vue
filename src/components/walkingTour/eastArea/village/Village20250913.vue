<template>
  <div style=" padding: 0 20px;">
<h2 class="title">
  2025/09/13 【 114年東區區域共好~探訪古今、看見建功之美 】<br/>
  建功聯里走讀學堂系列3：探索建功風華~人與土地之旅
</h2>

<h3>活動內容</h3>
                    <p>
由土生土長的里長與里民帶您走入光復路飲食文化連結人與土地的關係，走入眷村聚落165巷，了解南精忠新村現代生活與歷史的碰撞，到赤土崎公園與新源市場聽在地人的故事，走到聖若瑟天主堂與食物森林了解了解人與土地關係，公學甲區市民中心是居民、長輩交流的場域。以上都新竹市的新住民與眷村老朋友們共同的生活圈，歡迎您與您的家人一同來走讀,聽聽在地的故事。
                    </p>
    <h3>瑞福老師分享</h3>
                    <p>
                      很榮幸擔任科學城社區大學的工作人員，參與這場由新竹市東區區公所主辦、科學城社大承辦的走讀活動。集合地點就在新源市場旁，馬偕醫院邊路的對面——這條路曾經拓寬過，經由里長的介紹才知道，原來這裡以前是眷村。

👣 本次導覽由三位里長（光明里、豐功里、武功里）與一位豐功協會里事長帶領，東區區公所社政課課長也一同參與走讀。 原來這一帶除了眷村，還曾有軍事基地。隨著都市發展，軍事設施已遷移，眷村也陸續改建，留下的是記憶與故事。

🍃 最讓我印象深刻的是這裡有全台首座公有食物森林示範地——新竹市綠園道食物森林。 透過植物共存共榮的原理，不僅節省維養人力，也開啟了綠色空間的新想像。這不只是景觀，更是一種生活哲學。

🎙️ 里長們非常用心地介紹在地文化，雖然時間有限，只能選重點說明，但每一段講解都讓人感受到他們的熱情與深耕。

原本對這裡不太熟悉，聽完導覽後，心裡默默想著：下次一定要來這裡吃飯、逛一逛，好好感受這片土地的故事。
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
import '../Common.css'
const imgBase = getCurrentInstance().appContext.config.globalProperties.$env.apiUrl
</script>
<style>
.title {
  white-space: normal;
  font-size: clamp(18px, 3vw, 24px);
  line-height: 1.4;
  font-weight: bold;
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