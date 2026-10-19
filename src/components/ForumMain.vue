<!-- src/components/LocalKnowledge.vue -->
<template>
  <section class="local-knowledge">
    <!-- 主題單獨一行 -->
    <h2 class="title">🌿 公論周活動</h2>
    <!-- 說明文字 -->
    <p class="description">
      透過舉辦各類論壇與講座，促進公民參與與議題研討，提升社會對環境保護的意識與行動。
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
