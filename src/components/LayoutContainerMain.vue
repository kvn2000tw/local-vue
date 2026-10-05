<!-- src/components/LayoutContainer.vue -->
<template>
   <div>
    <NavBar />

  <div class="layout-container">
<slot name="slot2" />
    <CardSection />
 <!-- slot 包裝區域，加上 ref -->
      <div ref="slotScrollTarget">
        <slot />
      </div>

  
  </div>
     <AppFooter />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import CardSection from '@/components/CardSection.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  components: {
    NavBar,
    CardSection,
    AppFooter
  },
  setup() {
    const slotScrollTarget = ref(null)

onMounted(() => {
  setTimeout(() => {
    const navHeight = document.querySelector('nav')?.offsetHeight || 0
    const top = slotScrollTarget.value?.getBoundingClientRect().top + window.scrollY - navHeight

    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }, 100) // 延遲確保 DOM 完成渲染
})
    return {
      slotScrollTarget
    }
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
