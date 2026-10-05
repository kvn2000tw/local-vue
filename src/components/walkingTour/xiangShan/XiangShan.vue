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
import Nankang from './Nankang/Nankang.vue'



const tabs = [
  { key: 'Nankang', label: '南港藝術村', component: Nankang },

]

const activeTab = ref('Nankang')
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
