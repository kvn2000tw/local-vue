<!-- src/components/LayoutContainer.vue -->
<template>
   <div>
    <NavBar />

  <div class="layout-container">

    <CardSection />

    <slot />

    <!-- 底部卡片區域 -->
    <CardSection style="margin-top: 40px; padding-bottom: 40px;" />
  </div>
     <AppFooter />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CardSection from '@/components/CardSection.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  components: {
    NavBar,
    CardSection,
    AppFooter
  }
};
</script>

<style scoped>
.layout-container {
  max-width: 1000px; /* 限制最大寬度 */
  margin: 0 auto;     /* 水平置中 */
  padding: 0 20px;    /* 左右留白，避免緊貼邊緣 */
}
</style>
