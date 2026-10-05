<!-- src/components/LocalKnowledge.vue -->
<template>
  <section class="local-knowledge">
    <!-- 主題單獨一行 -->
    <h2 class="title">🌿 在地知識學</h2>

    <!-- 說明文字 -->
    <p class="description">
科學城社大的在地知識學，從新竹的土地、歷史、文化、產業、環境與居民生活出發，透過課程、走讀、田野調查、社區行動與交流，認識我們生活的地方。
</p>
<p class="description">
我們相信，在地知識不只存在於書本，也存在於一條水圳、一座山、一片濕地、一間老店、一段居民記憶，以及每一位生活在這片土地上的人。透過「走出去、看地方、問居民、做行動」，讓地方成為學習的教室，也讓學習回到地方。
    </p>
  </section>
</template>

<script>
export default {
  name: "LocalKnowledge",
};
</script>

<style scoped>
.local-knowledge {
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  /* 左邊綠色裝飾線 */
  border-left: 6px solid #2f855a;
}

.title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #2f855a;
  margin-bottom: 12px;
}

.description {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
}
</style>
