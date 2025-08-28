<!-- src/pages/CommunityHub.vue -->
<template>
   
  <div style=" padding: 0 20px;">
    <h2>2022/11/22 十八尖山 使用健走杖健走活動</h2>

    <h3>瑞福老師分享</h3>
     <p>
    111年11月20日早上 10點，科學城上方保健社團舉辦了使用健走杖健走活動。10點左右，在十八尖山入口處，</br>
                    
    校長、主任、老師、同學使用健走杖一起跟著兆熊老師開始健走。在第一個休息點，兆熊老師先示範怎麼使用健走杖，</br>
                    
    實地走一段，也請老師同學分組練習，重點就是不要同手同腳就算過關。</br>
                    
    每到一個休息點，老師就介紹健走杖怎麼使用，使用健走杖的好處，也請老師同學試著走一段路，</br>
                    
    有使用跟沒有使用健走杖的差別。不知不覺就走到第一廣場。由校長致詞，接著兆熊老師還是不厭其煩再一次說明，健走杖的使用對健康的好處，</br>
                    
    最後請老師同學做心得分享。現場民眾很多，有些看到就會主動詢問，本社團也希望藉由戶外舉辦活動讓更多民眾了解健走杖的好處，</br>
                    
    健康不只是老年人才需要，健康是從小就要重視的。經由團體的力量，一起養成好習慣。藉由工具的輔助，讓身體更健康是值得的。</br>

                </p>
    <h3>活動照片</h3>
  </div>
    <div class="gallery">
        <img :src="`${imgBase}/img/2022-11-22/001.jpeg`" alt="健走杖健走活動1">
        <img :src="`${imgBase}/img/2022-11-22/002.jpeg`" alt="健走杖健走活動2">
        <img :src="`${imgBase}/img/2022-11-22/003.jpeg`" alt="健走杖健走活動3">
        <img :src="`${imgBase}/img/2022-11-22/004.jpg`" alt="健走杖健走活動4">
        <img :src="`${imgBase}/img/2022-11-22/005.jpg`" alt="健走杖健走活動5">
        <img :src="`${imgBase}/img/2022-11-22/006.jpg`" alt="健走杖健走活動6">
        
    </div>

  
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import './Common.css'
const imgBase = getCurrentInstance().appContext.config.globalProperties.$env.apiUrl
</script>