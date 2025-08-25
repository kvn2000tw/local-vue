<!-- src/pages/CommunityHub.vue -->
<template>
   
 <ShareArea>
   
   
   <div style=" padding: 0 20px;">
    <h2>2024/08/23 十八尖山走讀歷史&手機APP辨識植物探索</h2>

    <h3>瑞福老師分享</h3>
    <p>這是我第二次參加社大十八尖山的活動，雖然路線和第一次走的一樣，內容相同，但這次是對外招生，有了第一次的經驗，讓我再次複習一次十八尖山的內容。 我想經由不同的主題讓我們更認識這座大家都知道的十八尖山。 首先是國琴老師介紹變葉木步道，利用手機APP可以做植物辨識，大家也拿出手機邊走邊拍照。兆祥老師講解國家重力站和防空洞的相關知識。袁立老師講解在十八尖山的石觀音和當時在十八尖山旁新竹高商內的賽馬場。 最後學員分享，對這次的活動大家都收穫滿滿。</p>
    <h3>活動照片</h3>
  </div>
    <div class="gallery">
        <img src="@/assets/img/2024-08-23/001.jpg" alt="辨識植物探索1">
        <img src="@/assets/img/2024-08-23/002.jpg" alt="辨識植物探索2">
        <img src="@/assets/img/2024-08-23/003.jpg" alt="辨識植物探索3">
        <img src="@/assets/img/2024-08-23/004.jpg" alt="辨識植物探索4">
        <img src="@/assets/img/2024-08-23/005.jpg" alt="辨識植物探索5">
        <img src="@/assets/img/2024-08-23/006.jpg" alt="辨識植物探索6">
      
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
