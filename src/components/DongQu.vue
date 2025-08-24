<template>
  <div class="tab-container">
    <div class="tab-buttons">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        class="tab-btn"
        :class="{ active: activeTab === tab.key }"
      >
        {{ tab.label }}
      </button>
    </div>

    <div
      v-for="tab in tabs"
      :key="tab.key + '-content'"
      class="tab-content"
      :class="{ active: activeTab === tab.key }"
    >
      <component :is="tab.component" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const Tab18Jianshan = {
  template: `
    <div>
      <h2>18尖山系列</h2>
      <p>環繞新竹市區的自然步道，適合晨間健行與城市邊緣探索。</p>
      <ul>
        <li>十八尖山環山步道</li>
        <li>植物觀察區</li>
        <li>晨間健走路線</li>
      </ul>
    </div>
  `
}

const TabLengShuiKeng = {
  template: `
    <div>
      <h2>冷水坑溪系列</h2>
      <p>沿著冷水坑溪流域展開的自然探索，結合水文地貌與生態觀察。</p>
      <ul>
        <li>源頭探訪</li>
        <li>親水步道</li>
        <li>生態導覽</li>
      </ul>
    </div>
  `
}

const tabs = [
  { key: '18jianshan', label: '18尖山系列', component: Tab18Jianshan },
  { key: 'lengshuikeng', label: '冷水坑溪系列', component: TabLengShuiKeng }
]

const activeTab = ref('18jianshan')
</script>

<style scoped>
.tab-container {
  margin-top: 20px;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.tab-btn {
  background-color: transparent;
  color: #666;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.3s ease;
  text-decoration: underline;
  text-decoration-color: transparent;
}

.tab-btn.active {
  color: #3a7c5b;
  text-decoration-color: #3a7c5b;
}

.tab-btn:hover {
  color: #3a7c5b;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}
</style>
