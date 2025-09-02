<!-- src/components/LocalKnowledge.vue -->
<template>
  <section class="local-knowledge">
    <!-- 主題單獨一行 -->
    <h2 class="title">🌿 社區夥伴</h2>

    <!-- 說明文字 -->
    <p class="description">
      當代社區發展不再只是空間的營造，更是人的連結與故事的交織。透過「人物專訪」、「社區夥伴」與「人才師資庫」三者的整合，我們得以勾勒出一幅活力社區的深度圖像。
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
