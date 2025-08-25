<!-- src/pages/CommunityHub.vue -->
<template>
   
 <ShareArea>
   
   
  <div style=" padding: 0 20px;">
    <h2>2024/08/04 十八尖山走讀歷史&手機APP辨識植物探索-探勘篇</h2>

    <h3>瑞福老師分享</h3>
    <p>國琴老師、兆祥老師、袁立老師三位老師為了2024/08/23辦的活動事先演練。剛好我的班級要辦十八尖山的戶外活動，因為颱風延期，所以就一起參加這次的活動。 經由這次三位老師對十八尖山的介紹，我還真的對十八尖山有不一樣的認知，原來我平常只是當作健走，爬爬小山，它的歷史卻有那麼豐富。 國琴老師利用手機APP可以讓我們平常在外面對於不認識的植物也能找到梘關的資料。兆祥老師說明國家重力站的相關知識，以前的物理知識重新複習。袁立老師說明的石觀音和賽馬場，一個現在還看的到，一個只能看照片說明。因為有了這場解說，我們都對十八尖山改觀， 值得好好去研究它的現在和過去。學員也了解到在科學城社大除了課堂上的知識以外，是可以多關心身在這片的土地，學以致用，豐富了生活。最後感謝三位老師讓暑期課程有了完美的ending！</p>
    <h3>活動照片</h3>
  </div>
    <div class="gallery">
        <img src="@/assets/img/2024-08-04/001.jpg" alt="探勘篇1">
        <img src="@/assets/img/2024-08-04/002.jpg" alt="探勘篇2">
        <img src="@/assets/img/2024-08-04/003.jpg" alt="探勘篇3">
        <img src="@/assets/img/2024-08-04/004.jpg" alt="探勘篇4">
        <img src="@/assets/img/2024-08-04/005.jpg" alt="探勘篇5">
        <img src="@/assets/img/2024-08-04/006.jpg" alt="探勘篇6">
      
    </div>

  </ShareArea>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ShareArea from '../components/ShareArea.vue'

</script>

<style scoped> 
/* 卡片樣式（共用） */
       .gallery {
             display: grid;
            grid-template-columns: repeat(3, 1fr); /* 三欄 */
            gap: 10px;
            max-width: 100%;
            margin: 20px auto;
            padding: 0 20px; /* 左右各 20px */
            box-sizing: border-box; /* 讓 padding 不影響 max-width */
        }
        .gallery img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            border: 2px solid #ccc;
        }
        h2 {
            color: #333;
            margin-top: 20px;
         
        box-sizing: border-box; /* 確保不影響排版 */
        }

</style>
