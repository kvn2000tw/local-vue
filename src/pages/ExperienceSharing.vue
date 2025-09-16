<!-- src/pages/ExperienceSharing.vue -->
<template>
 <LayoutContainer>
   
    <!-- 內容顯示區域 -->
    <ExperienceMain />
   
    <LearnCollect />
  </LayoutContainer>
</template>
<script setup>

import LayoutContainer from "@/components/LayoutContainer.vue";
import ExperienceMain from "@/components/ExperienceMain.vue";
import ExperienceArea from "@/components/ExperienceArea.vue";
import LearnCollect from "@/components/experience/learnCollect/LearnCollect.vue";

</script>

<style scoped> 
/* 卡片樣式（共用） */

</style>
