<template>
  <div class="page-container">

    <!-- 第三部分：永恆的康乃馨 母親節音樂會 -->
    <section class="content-section">
      <header class="section-header">
        <p class="section-meta">新竹市科學城社區大學115年春48學期公論週 第六場次</p>
        <h2 class="section-heading rose">「永恆的康乃馨 母親節音樂會」 — 專文報導</h2>
      </header>

      <div class="text-block">
        <p>
          在綠意盎然的五月初晨，新竹市十八尖山的博愛街登山入口處，傳來陣陣悠揚的琴聲與歌聲。新竹市科學城社區大學於115年5月2日星期六，舉辦了「115春季第48學期公共論壇週」的壓軸場次——「永恆的康乃馨~母親節音樂會」。這場山林間的感恩旋律盛會不僅是學員學習成果的展現，更是一次結合自然景觀、藝術表演與地方文化的深度公共參與，為溫馨的母親節揭開動人序幕，本場次吸引250位社大師生及民眾踴躍參與。
        </p>
        <p>
          科學城社大李世英校長在致詞中感性表示，公共論壇週的初衷在於促進社會對話，而音樂正是連結人心的最佳橋樑。活動現場貴賓蒞臨，包括市府代表曹永明總幹事、鄭正鈐立法委員、李國璋與劉彥伶市議員等皆親臨致意，劉議員更現場致贈康乃馨給民眾，讓初夏的山林充滿了愛與感恩的氛圍。
        </p>
        <p>
          音樂會的最大亮點，是由科學城社大跨班級合作打造的敘述音樂劇《永恆的康乃馨》。在楊純慧老師帶領的二胡演奏班主旋律中，搭配其他三位老師所帶領的班級及彭應彰與駱國琴老師的男女旁白，跨域整合，將女性一生的生命歷程——從燦爛青春、步入婚姻、辛勤育兒到晚年的回望——如敘事詩般層層堆疊，演繹女性生命的動人樂章。
        </p>
        <p>
          這場跨領域的展演集結了多方能量：駱正榮老師的民歌班、徐國棠老師的簫笛班，以及王金鳳老師的中東肚皮舞班。現場詮釋了《女人花》、《心肝寶貝》、《如願》等經典曲目，悠揚的旋律扣人心弦，讓許多在場民眾濕了眼眶。此外，各班級也輪番登台展現多元藝能，從情意深長的二胡獨奏到充滿異國風情的肚皮舞，充分展現了社大教師群深厚的藝術教育能量。
        </p>
        <p>
          除了舞台上的演出，科學城社大特別規劃了結合在地文史的寓教於樂的闖關活動，讓學習可以在公共空間中產生。由塗夢龍與羅瑞福老師引領民眾認識十八尖山的歷史點滴。透過互動遊戲，長輩與親子家庭在登山之餘，也能深化對新竹在地文化的認同，完成闖關的民眾還能獲得精美的雙面「花帽子」，讓現場驚喜與笑聲不斷，更讓這些走入山林的人深層地體驗在地文化。
        </p>
        <p>
          這場選址於公共登山步道的音樂會，吸引了眾多市民駐足停留。許多民眾表示，能在登山健行時偶遇這樣高品質的藝術饗宴，不僅身心舒暢，更深刻感受到音樂傳達的世代感恩之心。
        </p>
        <p>
          作為本學期公共論壇週的圓滿壓軸，「永恆的康乃馨~母親節音樂會」體現了科學城社大的核心價值：讓學習走出教室、走入公共空間。在自然與人文交織的十八尖山，這場愛與藝術的盛會不僅為公論週劃下深刻句點，也為新竹市民留下了最溫暖的五月記憶。
        </p>
      </div>

      <!-- 單張完整圖片展示 -->
      <div class="single-img-container">
        <img :src="images.beach1" alt="永恆的康乃馨 母親節音樂會" class="contain-img" />
      </div>
      <!-- 圖片展區 1：使用 v-for 迴圈產生圖片，透過 RWD 達成手機上一次顯示一張、大螢幕左右排 -->
      <div v-for="(group, index) in beachImageGroups" :key="index" class="custom-grid">
        <div v-for="(img, imgIndex) in group" :key="imgIndex" class="grid-img-wrapper">
          <img :src="img.url" :alt="img.alt" class="grid-img" />
        </div>
      </div>
      <!-- 單張完整圖片展示 -->
      <div class="single-img-container">
        <img :src="images.beach10" alt="永恆的康乃馨 母親節音樂會" class="contain-img" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive, computed } from 'vue'

const instance = getCurrentInstance()
const imgBase = instance?.appContext.config.globalProperties.$env?.apiUrl || ''

// 圖片路徑集中管理於 script 區
const images = reactive({
  beach1: `${imgBase}/img/2026-05-02/001.jpg`,
  beach2: `${imgBase}/img/2026-05-02/002.jpg`,
  beach3: `${imgBase}/img/2026-05-02/003.jpg`,
  beach4: `${imgBase}/img/2026-05-02/004.jpg`,
  beach5: `${imgBase}/img/2026-05-02/005.jpg`,
  beach6: `${imgBase}/img/2026-05-02/006.jpg`,
  beach7: `${imgBase}/img/2026-05-02/007.jpg`,
  beach8: `${imgBase}/img/2026-05-02/008.jpg`,
  beach9: `${imgBase}/img/2026-05-02/009.jpg`,
  beach10: `${imgBase}/img/2026-05-02/010.jpg`,
  
})

// 將淨灘圖片組裝成雙張一組的陣列，以便使用 v-for 迴圈進行 RWD 自適應呈現
const beachImageGroups = computed(() => [
  [
    { url: images.beach2, alt: '永恆的康乃馨 母親節音樂會合照 1' },
    { url: images.beach3, alt: '永恆的康乃馨 母親節音樂會合照 1' }
  ],
  [
    { url: images.beach4, alt: '永恆的康乃馨 母親節音樂會合照 2' },
    { url: images.beach5, alt: '永恆的康乃馨 母親節音樂會合照 2' }
  ],
  [
    { url: images.beach6, alt: '永恆的康乃馨 母親節音樂會合照 3' },
    { url: images.beach7, alt: '永恆的康乃馨 母親節音樂會合照 3' }
  ],
  [
    { url: images.beach8, alt: '永恆的康乃馨 母親節音樂會合照 4' },
    { url: images.beach9, alt: '永恆的康乃馨 母親節音樂會合照 4' }
  ],
])
</script>

<style scoped>
/* 自定義 RWD 網格樣式：手機小尺寸 (預設) 時為 1 欄（一次顯示一張），在大於等於 768px 時變為 2 欄左右排 */
.custom-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-top: 1rem;
}

@media (min-width: 768px) {
  .custom-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* 圖片外層容器：限制高寬、避免變形與小螢幕被擠壓壓縮 */
.grid-img-wrapper {
  width: 100%;
  height: 16rem;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #f3f4f6;
  flex-shrink: 0;
}

.grid-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* 海報等完整顯示容器（使用 contain 避免裁切重要文字與資訊） */
.single-img-container {
  width: 100%;
  max-height: 32rem;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #f3f4f6;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contain-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
}

/* 其他排版與文字樣式輔助 */
.page-container {
  max-width: 65rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  color: #1f2937;
}

.page-container > * + * {
  margin-top: 3rem;
}

.content-section {
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.content-section > * + * {
  margin-top: 1.5rem;
}

.section-title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #0f766e;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #4b5563;
  font-style: italic;
}

.text-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: justify;
  line-height: 1.75;
}

.section-header {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.75rem;
}

.section-meta {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #6b7280;
  font-weight: 500;
}

.section-heading {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin-top: 0.25rem;
}

.section-heading.green {
  color: #166534;
}

.section-heading.rose {
  color: #be123c;
}

.text-justify {
  text-align: justify;
  line-height: 1.75;
}

.sub-heading {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin-top: 1rem;
}

.sub-heading.green {
  color: #15803d;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}
</style>