<!-- src/pages/CommunityHub.vue -->
<template>
      
  <div style=" padding: 0 20px;">
    <h2>2024/10/12 十八尖山山林系列石觀音探訪與茶道文化體驗篇</h2>

    <h3>雅婷老師分享</h3>
    <p>十八尖山位在新竹市的東南郊，是一塊長約七、八公里、呈新月形，由十八座高約百公尺的山頭所構成的丘陵地帶，在日治時代所開闢的「森林公園」基礎下繼續延伸，現在在新竹市政府的規劃下，沿途遍山林茂密，步道縱橫，草木扶疏，空氣清新，一直是新竹市民爬山運動休閒的好去處。 為了讓學員們能夠更加的理解新竹在地的地景文化樣貌，我們展開了一個結合了新竹在地十八尖山文史遺跡探查(石觀音)與日本文化(茶道文化)的戶外教學文化體驗活動。課前透過簡報檔歷史的爬梳，我們了解了此行我們探訪的石觀音和當時日本西國三十三觀音巡禮文化的關係，並在殘存的石觀音的刻字中(昭和四年八月)，拼湊出歷史的痕跡，見證時代背景下的文化產物。由於石觀音尊數眾多，如果只是走馬看花看過去殊為可惜，我們也更進一步辨識石觀音像的名稱和特徵，解說這些石觀音的特徵所代表的意義，真真實實的進行了一場心靈的淨化之旅! 最後我們在十八尖山的涼亭裡刷上一服抹茶，小憩休息。日文教材茶道內容，並實際讓同學們動手DIY刷抹茶，體驗日式茶道，喝抹茶配茶點真是優雅又愜意啊！</p>
    <h3>活動照片</h3>
  </div>
    <div class="gallery">
      <img :src="`${imgBase}/img/2024-10-12/001.jpg`" alt="體驗篇1">
      <img :src="`${imgBase}/img/2024-10-12/002.jpg`" alt="體驗篇2">
      <img :src="`${imgBase}/img/2024-10-12/003.jpg`" alt="體驗篇3">
      <img :src="`${imgBase}/img/2024-10-12/004.jpg`" alt="體驗篇4">
      <img :src="`${imgBase}/img/2024-10-12/005.jpg`" alt="體驗篇5">
      <img :src="`${imgBase}/img/2024-10-12/006.jpg`" alt="體驗篇6"> 
    </div>

</template>

<script setup>
import { getCurrentInstance } from 'vue'
import '../Common.css'
const imgBase = getCurrentInstance().appContext.config.globalProperties.$env.apiUrl
</script>