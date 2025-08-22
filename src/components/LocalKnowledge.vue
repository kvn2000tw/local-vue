<!-- src/components/LocalKnowledge.vue -->
<template>
  <section class="local-knowledge">
    <!-- 主題單獨一行 -->
    <h2 class="title">🌿 在地知識學</h2>

    <!-- 說明文字 -->
    <p class="description">
      在地知識學是一門專注於研究特定地區的文化、經濟、社會等各層面的學科。
      它強調從當地居民的視角出發，深入探討地方的歷史、人文、風土等因素，
      並重視社群的參與和貢獻。
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
