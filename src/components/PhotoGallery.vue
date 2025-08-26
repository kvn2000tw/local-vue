<template>
  <div class="gallery">
    <div class="photo-col" v-for="(photo, index) in photos" :key="index">
      <img :src="photo.src" :alt="photo.alt" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoGallery",
  data() {
    return {
      photos: [
        { src: "/img/2023-05-06/002.jpg", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/003.jpg", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/004.jpg", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/005.jpg", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group1/001.jpg", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group1/002.jpg", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group1/003.png", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group1/004.png", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group2/001.png", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group2/002.png", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group2/003.png", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group2/004.png", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group3/001.png", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group3/002.png", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group3/003.png", alt: "冷水坑溪家庭大健走" },
        { src: "/img/2023-05-06/group3/004.png", alt: "冷水坑溪家庭大健走" },
        // 其他圖片...
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
