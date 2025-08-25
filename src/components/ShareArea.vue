<!-- src/pages/CommunityHub.vue -->
<template>
   
 <LayoutContainer>
    <template #slot2>
    <!-- slot2 的內容 -->
    <div class="back-button-wrapper">
      <button class="back-button" @click="goBack">← 返回</button>
    </div>
  </template>
   
  <slot />

  </LayoutContainer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import LayoutContainer from "@/components/LayoutContainer.vue"

const router = useRouter()
function goBack() {
  router.back()
}
</script>

<style scoped> 

.back-button-wrapper {
  padding: 10px 20px;
}

.back-button {
  background-color: #3a7c5b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
}
.back-button:hover {
  background-color: #2e5e44;
}
</style>
