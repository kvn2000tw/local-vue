<!-- src/pages/CommunityHub.vue -->
<template>
   
 <LayoutContainer>
   
    <!-- 內容顯示區域 -->
    <CommunityMain />
   
    <CommunityArea />
  </LayoutContainer>
</template>

<script setup>

import LayoutContainer from "@/components/LayoutContainer.vue";
import CommunityMain from "@/components/CommunityMain.vue";
import CommunityArea from "@/components/CommunityArea.vue";

</script>

<style scoped> 
/* 卡片樣式（共用） */

</style>
