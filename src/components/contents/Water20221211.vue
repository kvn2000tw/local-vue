<template>
  <div style=" padding: 0 20px;">
    <h2 class="title">2022/12/11 冷水坑溪親子遊 </h2>
    
 
    <h3>瑞福老師分享</h3>
                     <p>
    科學城親親遊在地生態社群這次準備了冷水坑溪巡禮活動。地點在光武國中的禮堂，同時間也是科學城社大的成果展，非常的熱鬧！ 社群準備了五個關卡希望能夠對冷水坑溪的歷史文化有一個基本的認知。以下是分享當天的活動照片。
                   </p>
 
 <div class="photo-section">
  <h5>活動照片</h5>

  <div class="activity-gallery">
    <div v-for="(level, index) in levels" :key="index" class="level-section">
      <div class="level-desc">
        <p>{{ level.desc }}</p>
      </div>
      <div class="photo-row">
        <div v-for="(img, idx) in level.images" :key="idx" class="photo-col">
          <a :href="img" target="_blank">
            <div class="photo-wrapper">
              <img :src="img" alt="活動照片" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script setup>
const levels = [
  {
    desc: "第一關『講古聽福伯』關主：瑞福老師。說明冷水坑溪的歷史。讓民眾了解在這附近曾經有一條很有名的溪流。",
    images: [
      '/img/2022-12-11/level1/001.jpeg',
      '/img/2022-12-11/level1/002.jpeg',
      '/img/2022-12-11/level1/003.jpeg',
      '/img/2022-12-11/level1/004.jpeg',
      '/img/2022-12-11/level1/005.jpg',
      '/img/2022-12-11/level1/006.jpeg',
    ]
  },
  {
    desc: "第二關『我是約溪高手』關主：雅婷老師。準備了一個游泳圈，可以讓小朋友玩約魚遊戲。",
    images: [
      '/img/2022-12-11/level2/001.jpg',
      '/img/2022-12-11/level2/002.jpg',
      '/img/2022-12-11/level2/003.jpg',
      '/img/2022-12-11/level2/004.jpg',
      '/img/2022-12-11/level2/005.jpg',
      '/img/2022-12-11/level2/006.jpg',
    ]
  },
  {
    desc: "第三關『冷水坑溪景點對對碰』關主：國琴老師。以六個冷水坑溪附近的景點當作骰子的點數，民眾可以以擲骰子的點數說出景點的名稱。",
    images: [
      '/img/2022-12-11/level3/001.jpg',
      '/img/2022-12-11/level3/002.jpg',
      '/img/2022-12-11/level3/003.jpg',
      '/img/2022-12-11/level3/004.jpg',
      '/img/2022-12-11/level3/005.jpg',
      '/img/2022-12-11/level3/006.jpg',
    ]
  },
  {
    desc: "第四關『尋植物~奉茶』關主：泓瑜老師。認識盆栽植物，現場備有香草茶可以享用。",
    images: [
      '/img/2022-12-11/level4/001.jpg',
      '/img/2022-12-11/level4/002.jpg',
      '/img/2022-12-11/level4/003.jpeg',
      '/img/2022-12-11/level4/004.jpg',
      '/img/2022-12-11/level4/005.jpg',
      '/img/2022-12-11/level4/006.jpg',
    ]
  },
  {
    desc: "第五關『冷水坑溪DIY 紙黏土捏塑』關主：品慧老師。以當時的冷水坑溪魚種為樣本，由民眾以紙黏土捏出其中一種魚。",
    images: [
      '/img/2022-12-11/level5/001.jpg',
      '/img/2022-12-11/level5/002.jpg',
      '/img/2022-12-11/level5/003.jpg',
      '/img/2022-12-11/level5/004.jpg',
      '/img/2022-12-11/level5/005.jpg',
      '/img/2022-12-11/level5/006.jpg',
    ]
  },
]
</script>

<style scoped>
.activity-gallery {
  padding: 10px 20px;
}

.level-desc {
  margin-bottom: 10px;
}

.photo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.photo-col {
  flex: 1 1 calc(25% - 10px); /* 一排 4 張 */
  max-width: calc(25% - 10px);
}

.photo-col img {
  width: 100%;       /* 統一寬度 */
  height: 200px;     /* 統一高度 */
  object-fit: contain; /* 保持比例，不變型 */
  display: block;
  border-radius: 8px;
}

.photo-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1; /* 正方形 */
  overflow: hidden;
  border-radius: 8px;
}

.photo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持比例並填滿容器 */
  display: block;
}

/* 平板：一排 3 張 */
@media (max-width: 768px) {
  .photo-col {
    flex: 1 1 calc(33.33% - 10px);
    max-width: calc(33.33% - 10px);
  }
}

/* 手機：一排 2 張 */
@media (max-width: 480px) {
  .photo-col {
    flex: 1 1 calc(50% - 10px);
    max-width: calc(50% - 10px);
  }
}
</style>

