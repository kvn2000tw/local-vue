<!-- Tab18Jianshan.vue -->
<template>
  <div>
    <h2>18尖山系列</h2>
    <p>環繞新竹市區的自然步道，適合晨間健行與城市邊緣探索。</p>

    <!-- 卡片容器 -->
    <div class="card-grid">
      <div class="card">
        <img src="@/assets/img/2024-07-04/004.jpg" alt="十八尖山" />
        <h5>十八尖山山林教育系列</h5>
        <p>歷史與植物探索</p>
       
      </div>
      <div class="card">
        <img src="@/assets/img/2024-08-04/002.jpg" alt="十八尖山">
        <h5>十八尖山山林教育系列</h5>
        <p>十八尖山走讀歷史&手機APP辨識植物探索-探勘篇</p>
      </div>
      <div class="card">
        <img src="@/assets/img/2024-08-23/001.jpg" alt="十八尖山">
         <h5>十八尖山山林教育系列</h5>
        <p>十八尖山走讀歷史&手機APP辨識植物探索</p>
      </div>
      <div class="card">
        <img src="@/assets/img/2024-10-12/002.jpg" alt="十八尖山">
         <h5>十八尖山山林教育系列</h5>
        <p>石觀音探訪與茶道文化體驗篇</p>
      </div>
      <div class="card">
        <img src="@/assets/img/2024-10-23/003.jpg" alt="十八尖山">
         <h5>十八尖山山林教育系列</h5>
         <p>山林茶趣篇</p>
      </div>
      <div class="card">
        <img src="@/assets/img/2024-11-03/007.jpg" alt="十八尖山">
         <h5>十八尖山山林教育系列</h5>
          <p>十八尖山山林系列雅韻篇</p>
      </div>
      <div class="card">
        <img src="@/assets/img/2024-11-17/004.jpg" alt="十八尖山">
         <h5>十八尖山山林教育系列</h5>
         <p>十八尖山山林系列藝術篇</p>
      </div>
      <div class="card">
        <img src="@/assets/img/2024-11-24/001.jpg" alt="十八尖山">
         <h5>十八尖山山林教育系列</h5>
          <p>山林健康有氧篇</p>
      </div>
      <div class="card">
        <img src="@/assets/img/2024-12-28/018.jpg" alt="十八尖山">
         <h5>十八尖山山林教育系列</h5>
         <p>永續發展與生活實踐十八尖山成果展</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 沒有額外邏輯
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
}
p {
  margin-bottom: 16px;
  color: #374151;
}

/* ✅ 卡片容器：每行 4 欄 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

/* ✅ 卡片樣式 */
.card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
  text-align: center;
  font-weight: 600;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
}
.card p {
  margin: 0;
  font-size: 1rem;
  color: #111827;
}

/* ✅ RWD：小螢幕自動改成 2 欄 */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
