<template>
  <div style=" padding: 0 20px;">
    <h2 class="title">2022/11/10 爺爺、奶奶暢遊冷水坑溪岸的靜心湖 </h2>
    <h4 class="title">週四早智慧手機軟體app進階應用班級活動</h4>
 

    <h3>國琴老師分享</h3>
                     <p>
    新竹科學城社區大學在實踐核心理念的歷程中，發展系統性的地方知識學，同時引導社大講師鼓勵學員與社區民眾，從關心自身周遭的各類社區議題出發，透過具體行動與實際參與，再由社大講師觸發學員與社區民眾的公共性.<br>

    科學城社大週四智慧手機軟體app進階應用班級的駱國琴老師認同科學城社區大學發展系統性地方知識學的理念，更希望透過具體行動與實際參與，觸發學員與社區民眾的公共性，也發現本班在地的學員對冷水坑溪岸的自然景觀和文化充滿興趣，並希望藉由影片製作留下珍貴的回憶與分享地方故事。<br>
    所以駱國琴老師帶領學員共同完成從編劇、排演、靜心湖外拍到影片剪輯的全過程，並將成果上傳至YouTube，不僅激發了學員對地方文化的關注，也展現了他們應用新科技記錄與分享地方知識的熱忱與成就。<br><br>
    班級活動記錄<br>
    111秋季1111110
    主題：爺爺、奶奶暢遊冷水坑溪岸的靜心湖<br>
    班級：智慧手機軟體app進階應用<br>
    指導老師：駱國琴老師<br>
    參與學員：劉誠憲 賴淑珍 林恆雄 章溪賓 邱桂蘭 張啟宗 劉台興 美英 謝梁玉葉<br>
    內容：一群熱情地長輩介紹他們所認識的冷水坑溪，拍攝影片並上傳youtub 留下珍貴的記憶及存證。<br>
    影片是由周四早智慧手機app軟體app進階應用班級自己編劇、綵排、預演、靜心湖外拍、影片剪輯、演員。大家玩的很開心！<br>
    編劇及導演:駱國琴老師<br>
    製作:新竹市科學城社區大學<br>
    完成時間:111年11月24日<br>
    爺爺奶奶暢遊冷水坑溪岸的靜心湖-- 科學城社大智慧手機班20221124<br>
    網址:<a href="https://youtu.be/XJ_McurBdco">https://youtu.be/XJ_McurBdco</a> 
                   </p>
 
 <div class="photo-section">
  <h5>活動照片</h5>

  <div class="photo-row">
    <div
      v-for="(img, index) in images"
      :key="index"
      class="photo-col"
    >
      <a :href="img" target="_blank">
        <div class="photo-wrapper">
          <img :src="img" alt="照片展示" />
        </div>
      </a>
    </div>
  </div>

</div>
</div>
</template>
<script setup>
const images = [
  // 第一排
  '/img/2022-11-10/001.jpg',
  '/img/2022-11-10/002.png',
  '/img/2022-11-10/003.jpg',
  '/img/2022-11-10/004.jpg',

  // 第二排
  '/img/2022-11-10/005.jpg',
  '/img/2022-11-10/006.jpg',
  '/img/2022-11-10/007.jpg',
  '/img/2022-11-10/008.jpg',

  // 第三排
  '/img/2022-11-10/009.jpg',
  '/img/2022-11-10/010.jpg',
  '/img/2022-11-10/011.jpg',
  '/img/2022-11-10/012.jpg',

  // 第四排
  '/img/2022-11-10/013.jpg',
  '/img/2022-11-10/014.png',
  '/img/2022-11-10/015.png',
  '/img/2022-11-10/016.png',

  // 第五排
  '/img/2022-11-10/017.png',
  '/img/2022-11-10/018.png',
  '/img/2022-11-10/019.jpg',
  '/img/2022-11-10/020.jpg',
]
</script>
<style scoped>
.photo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
}

.photo-col {
  flex: 1 1 calc(25% - 15px);
  max-width: calc(25% - 15px);
}

.photo-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1; /* 固定長寬比正方形 */
  overflow: hidden;
  border-radius: 8px;
}

.photo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持比例，填滿容器，裁切多餘 */
  display: block;
  transition: transform 0.2s ease;
}

.photo-wrapper img:hover {
  transform: scale(1.05);
}

/* 平板：一排 2 張 */
@media (max-width: 768px) {
  .photo-col {
    flex: 1 1 calc(50% - 15px);
    max-width: calc(50% - 15px);
  }
}

/* 手機：一排 1 張 */
@media (max-width: 480px) {
  .photo-col {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>