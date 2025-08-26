<template>
  <div style=" padding: 0 20px;">
    <h2 class="title">2024/05/04 走訪冷水坑溪寺廟之旅 </h2>
    
 
    <h3>瑞福老師分享</h3>
                          <p>
                        走訪冷水坑溪寺廟之旅，這次主要是以寺廟（鎮安宮、金山寺）為主題，再一次走訪冷水坑溪，
                        國琴老師全程主持，開場由碧芝老師介紹冷水坑溪的歷史，兆祥老師帶領大家沿途繞行靜心湖，介紹週遭的植物，走到鎮安宮，由我來介紹鎮安宮的相關歷史，
                        這次有圖片的輔助，讓我覺得效果不錯。接著往回走到金山寺，由雅婷老師介紹金山寺，最後回到太極廣場，首先是正榮老師表演太極，品慧老師的黏土手作再一次完成了冷水坑溪的廵禮。
                        我想為了辦活動，事前的準備找資料，增加自己的知識，也能夠嘗試不同的事物。
                    </p>
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

<script>
export default {
  name: "PhotoGallery",
  data() {
    return {
      photos: [
        { src: "/img/2024-05-04/001.jpg", alt: "走訪冷水坑溪寺廟之旅" },
        { src: "/img/2024-05-04/002.jpg", alt: "走訪冷水坑溪寺廟之旅" },
        { src: "/img/2024-05-04/003.jpg", alt: "走訪冷水坑溪寺廟之旅" },
        { src: "/img/2024-05-04/004.jpg", alt: "走訪冷水坑溪寺廟之旅" },
        { src: "/img/2024-05-04/005.jpg", alt: "走訪冷水坑溪寺廟之旅" },
        { src: "/img/2024-05-04/006.jpg", alt: "走訪冷水坑溪寺廟之旅" },
      ],
    };
  },
};
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