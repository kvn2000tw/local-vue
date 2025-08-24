<!-- src/components/LocalKnowledge.vue -->
<template>
  <section class="local-knowledge">
    <!-- 主題單獨一行 -->
    <h2 class="title">🌿 走讀新竹</h2>

    <!-- 說明文字 -->
    <p class="description">
      走讀新竹，是一場在歷史與現代之間穿梭的旅程。老街、城門、廟宇、河岸，每一步都藏著故事，也映照著城市的變化。你不只是走路，而是在感受一座城的脈動。
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
