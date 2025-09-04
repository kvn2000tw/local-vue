<template>
  <div class="p-4 wrapper">
    <div class="tabs" role="tablist" aria-label="內容切換按鈕">
      <button
        v-for="(tab, idx) in tabs"
        :key="tab.key"
        class="main-btn"
        :class="{ 'selected': activeTab === tab.key }"
        role="tab"
        :aria-selected="activeTab === tab.key"
        :aria-controls="`panel-${tab.key}`"
        :tabindex="activeTab === tab.key ? 0 : -1"
        @click="activeTab = tab.key"
        @keydown.arrow-right.prevent="focusNext(idx)"
        @keydown.arrow-left.prevent="focusPrev(idx)"
        ref="tabRefs"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- 動態切換組件 -->
   <transition name="fade" mode="out-in">
  <component :is="activeComponent" class="panel" />
</transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import WetlandConservation from './ecology/wetlandConservation/WetlandConservation.vue'
import RiverStreamArea from './ecology/riverStreamArea/RiverStreamArea.vue'


const tabs = [
  { key: 'wetland_conservation', label: '濕地保育', component: WetlandConservation },
  { key: 'river_stream_area', label: '溪流河域', component: RiverStreamArea },

]

const activeTab = ref('wetland_conservation')
const tabRefs = ref([])

const activeComponent = computed(() => {
  return tabs.find(t => t.key === activeTab.value)?.component || null
})

function focusNext(currentIdx) {
  const nextIdx = (currentIdx + 1) % tabs.length
  tabRefs.value[nextIdx]?.focus()
}
function focusPrev(currentIdx) {
  const prevIdx = (currentIdx - 1 + tabs.length) % tabs.length
  tabRefs.value[prevIdx]?.focus()
}

onMounted(() => {
  tabRefs.value = tabRefs.value.slice(0, tabs.length)
})
</script>

<style scoped>
:root {
  --primary: #2563eb;
  --primary-weak: #dbeafe;
  --border: #e5e7eb;
  --text: #111827;
  --muted: #6b7280;
  --radius: 16px;
}
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 920px;
  margin: 48px auto;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  background: #fff;
}
.tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

/* ✅ 改為 main-btn */
.main-btn {
  padding: 18px 16px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 20px;
  border: 2px solid var(--border);
  background: #fff;
  cursor: pointer;
  transition: transform 0.06s ease, background 0.2s ease, border-color 0.2s ease,
    box-shadow 0.2s ease;
  outline: none;
}
.main-btn:hover {
  transform: translateY(-1px);
}
.main-btn.selected {
  background: #3a7c5b;
  border-color: var(--primary);
  color: #fff; /* ✅ 讓字變白色 */
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.15);
}
.main-btn:focus-visible {
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.25);
  border-color: var(--primary);
}

.panel {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: #fff;
  min-height: 160px;
}
@media (max-width: 640px) {
  .main-btn {
    font-size: 16px;
    padding: 16px 14px;
  }
  .panel {
    padding: 16px;
  }
}


</style>
