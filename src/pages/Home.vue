<!-- src/pages/CommunityHub.vue -->
<template>
  <div>
    <NavBar />

 <LayoutContainer>
    <CardSection />

    <!-- 內容顯示區域 -->
    <LocalKnowledge />

    <!-- 底部卡片區域 -->
    <CardSection style="margin-top: 40px; padding-bottom: 40px;" />
  </LayoutContainer>
     <AppFooter />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import LayoutContainer from "@/components/LayoutContainer.vue";
import LocalKnowledge from "@/components/LocalKnowledge.vue";
import CardSection from '@/components/CardSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import image1 from '@/assets/img/清咸豐九年淡新檔案金山面一代埔地圖說.png'
const router = useRouter()

const activeTab = ref('person')

const partners = [
  {
    title: '社區名稱',
    img: 'https://via.placeholder.com/200x150/3a7c5b/ffffff?text=社區名稱',
    desc: '與在地社區建立緊密合作關係，共同推動地方發展與文化傳承。',
    tags: ['地方發展', '文化傳承']
  },
  {
    title: '公益團體',
    img: 'https://via.placeholder.com/200x150/3a7c5b/ffffff?text=公益團體',
    desc: '與各類公益團體合作，攜手推動社會公益與環境保護工作。',
    tags: ['社會公益', '環境保護']
  },
  {
    title: '非營利組織',
    img: 'https://via.placeholder.com/200x150/3a7c5b/ffffff?text=非營利組織',
    desc: '與非營利組織建立夥伴關係，共同致力於社會服務與文化推廣。',
    tags: ['社會服務', '文化推廣']
  },
  {
    title: '個人',
    img: 'https://via.placeholder.com/200x150/3a7c5b/ffffff?text=個人',
    desc: '與在地個人夥伴合作，匯集個人專長與熱情，共同推動地方發展。',
    tags: ['個人專長', '地方發展']
  }
]

const talents = [
  {
    title: '學術研究專家',
    img: 'https://via.placeholder.com/200x150/3a7c5b/ffffff?text=學術研究專家',
    desc: '具備深厚學術背景的研究專家，提供理論基礎與研究方法指導。',
    tags: ['學術研究', '理論基礎']
  },
  {
    title: '實務經驗導師',
    img: 'https://via.placeholder.com/200x150/3a7c5b/ffffff?text=實務經驗導師',
    desc: '擁有豐富實務經驗的導師，分享實際操作技巧與實戰經驗。',
    tags: ['實務經驗', '操作技巧']
  },
  {
    title: '在地文化專家',
    img: 'https://via.placeholder.com/200x150/3a7c5b/ffffff?text=在地文化專家',
    desc: '深入了解在地文化的專家，傳承地方文化精髓與歷史脈絡。',
    tags: ['在地文化', '文化傳承']
  }
]

const openLink = (url) => {
  window.open(url, '_blank')
}

const go = (name) => {
  router.push({ name })
}

const currentTitle = computed(() => {
  switch (activeTab.value) {
    case 'person': return '人物專訪'
    case 'partner': return '社區夥伴'
    case 'talent': return '人才師資庫'
    default: return ''
  }
})
</script>

<style scoped>
.section-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 20px;
}
  
.main-button-group {
  display: flex;
  gap: 20px;
  
  margin-top: 8px;
  justify-content: center; /* 或 space-between，看你想怎麼分佈 */
  width: 100%; /* ✅ 撐滿父層寬度 */
}
.main-btn { 
  display: inline-flex;          /* ✅ 用 flex 讓文字置中 */
  justify-content: center;
  align-items: center;
  width: 150px;   
  height: 70px;
  font-size: 16px;               /* ✅ 適合大按鈕的字體 */
  font-weight: 600;
  color: var(--green);
  border: 2px solid var(--green);
  border-radius: 20px;           /* ✅ 改成大圓角，比 999px 更自然 */
  text-decoration: none;
  box-sizing: border-box;

  /* ✅ 漸層背景 + 陰影 */
  background: linear-gradient(135deg, #ffffff, #f5fdf7);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  /* ✅ 平滑過渡 */
  transition: all 0.3s ease;
}

/* 滑過效果 */
.main-btn:hover {
  background: var(--green);
  color: #fff;
  transform: translateY(-3px);       /* ✅ 輕微浮起 */
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
}

/* 點擊效果 */
.main-btn:active {
  transform: translateY(0);          /* ✅ 點下去回彈 */
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
}

/* 如果要突出「選取中」狀態 */
.main-btn.active {
  background: var(--green);
  color: #fff;
  border-color: var(--green);
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);
}

 

/* 卡片樣式（共用） */

</style>
