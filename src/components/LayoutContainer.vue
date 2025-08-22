<!-- src/components/LayoutContainer.vue -->
<template>
  <div class="layout-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "LayoutContainer",
};
</script>

<style scoped>
.layout-container {
  max-width: 1000px; /* 限制最大寬度 */
  margin: 0 auto;     /* 水平置中 */
  padding: 0 20px;    /* 左右留白，避免緊貼邊緣 */
}
</style>
