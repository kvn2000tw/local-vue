<!-- src/pages/CommunityHub.vue -->
<template>
   
 <LayoutContainer>
   
    <!-- 內容顯示區域 -->
    <WalkingTour />
    <WalkingTourArea />

  </LayoutContainer>
</template>

<script setup>

import LayoutContainer from "@/components/LayoutContainer.vue";
import WalkingTour from "@/components/WalkingTour.vue";
import WalkingTourArea from "@/components/WalkingTourArea.vue";

</script>

<style scoped> 
/* 卡片樣式（共用） */

</style>
