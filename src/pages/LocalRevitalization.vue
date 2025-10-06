<!-- src/pages/ExperienceSharing.vue -->
<template>
 <LayoutContainer>
   
    <!-- 內容顯示區域 -->
    <RevitalizationMain />
   

    <Interview />
  </LayoutContainer>
</template>
<script setup>

import LayoutContainer from "@/components/LayoutContainer.vue";
import RevitalizationMain from "@/components/RevitalizationMain.vue";
//import RevitalizationArea from "@/components/RevitalizationArea.vue";
import Interview from '@/components/revitalization/Interview.vue'
</script>

<style scoped> 
/* 卡片樣式（共用） */

</style>
