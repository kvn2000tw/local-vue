<!-- src/pages/CommunityHub.vue -->
<template>
  <div>
    <nav class="nav">
      <h1>新竹市科學城社區大學 - 地方在地知識學</h1>
      <ul>
        <li><RouterLink :to="{ name: 'home' }">社區夥伴</RouterLink></li>
        <li><RouterLink :to="{ name: 'experience' }">經驗觀點</RouterLink></li>
        <li><RouterLink :to="{ name: 'walking' }">走讀新竹</RouterLink></li>
        <li><RouterLink :to="{ name: 'revitalization' }">地方創生</RouterLink></li>
        <li><RouterLink :to="{ name: 'ecology' }">在地生態</RouterLink></li>
      </ul>
    </nav>

    <section class="section-container">
      <div class="card" id="culture" @click="go('home')">
        <h3>社區夥伴</h3>
        <p>人物專訪、社區夥伴、人才師資庫。</p>
      </div>
      <div class="card" id="wisdom" @click="go('experience')">
        <h3>經驗觀點</h3>
        <p>教師分享、活動分享、學員分享。</p>
      </div>
      <div class="card" id="language" @click="go('walking')">
        <h3>走讀新竹</h3>
        <p>山林系列、水資源系列。</p>
      </div>
      <div class="card" id="nature" @click="go('revitalization')">
        <h3>地方創生</h3>
        <p>優良店家採訪</p>
      </div>
      <div class="card" id="community" @click="go('ecology')">
        <h3>在地生態</h3>
        <p>濕地保育、溪流河域。</p>
      </div>

      <div class="main-button-group">
        <a href="#" class="main-btn" :class="{ active: activeTab==='person' }" @click.prevent="activeTab='person'">人物專訪</a>
        <a href="#" class="main-btn" :class="{ active: activeTab==='partner' }" @click.prevent="activeTab='partner'">社區夥伴</a>
        <a href="#" class="main-btn" :class="{ active: activeTab==='talent' }" @click.prevent="activeTab='talent'">人才師資庫</a>
      </div>
    </section>

    <!-- 內容顯示區域 -->
    <div class="content-area" :class="{ active: true }">
      <h3>{{ currentTitle }}</h3>

      <!-- 人物專訪 -->
      <div v-if="activeTab==='person'" class="content-placeholder person-interview">
        <h4>在地人物故事</h4>
        <p>深入訪談在地重要人物，了解他們的故事與貢獻。</p>
        <div class="interview-cards">
          <article class="interview-card" @click="openLink('人物專訪/冷水坑溪.html')">
            <div class="card-image">
              <img src="/img/清咸豐九年淡新檔案金山面一代埔地圖說.png" alt="冷水坑溪" />
            </div>
            <div class="card-content">
              <h5>冷水坑溪</h5>
              <p>探索冷水坑溪流域的在地人物故事，了解他們與水資源的深厚連結。</p>
              <div class="card-tags">
                <span class="tag">水資源</span>
                <span class="tag">在地故事</span>
              </div>
            </div>
          </article>

          <article class="interview-card" @click="openLink('https://example.com/cold-water-creek')">
            <div class="card-image">
              <img src="https://via.placeholder.com/200x150/3a7c5b/ffffff?text=眷村採訪" alt="眷村採訪" />
            </div>
            <div class="card-content">
              <h5>眷村採訪</h5>
              <p>深入眷村文化，採訪在地居民，記錄珍貴的歷史記憶與生活故事。</p>
              <div class="card-tags">
                <span class="tag">文化傳承</span>
                <span class="tag">歷史記憶</span>
              </div>
            </div>
          </article>

          <article class="interview-card" @click="openLink('https://example.com/cold-water-creek')">
            <div class="card-image">
              <img src="https://via.placeholder.com/200x150/3a7c5b/ffffff?text=南港採訪" alt="南港採訪" />
            </div>
            <div class="card-content">
              <h5>南港採訪</h5>
              <p>走訪南港地區，採訪在地人物，了解南港的發展歷程與文化特色。</p>
              <div class="card-tags">
                <span class="tag">地方發展</span>
                <span class="tag">文化特色</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- 社區夥伴 -->
      <div v-else-if="activeTab==='partner'" class="content-placeholder community-partners">
        <h4>合作夥伴網絡</h4>
        <p>與我們一起推動地方發展的重要夥伴。</p>
        <div class="partner-cards">
          <article class="partner-card" v-for="(p, i) in partners" :key="i">
            <div class="card-image">
              <img :src="p.img" :alt="p.title" />
            </div>
            <div class="card-content">
              <h5>{{ p.title }}</h5>
              <p>{{ p.desc }}</p>
              <div class="card-tags">
                <span v-for="(t, ti) in p.tags" :key="ti" class="tag">{{ t }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- 人才師資庫 -->
      <div v-else class="content-placeholder talent-pool">
        <h4>專業師資陣容</h4>
        <p>匯集各領域專業人才，提供優質的學習資源。</p>
        <div class="talent-cards">
          <article class="talent-card" v-for="(t, i) in talents" :key="i">
            <div class="card-image">
              <img :src="t.img" :alt="t.title" />
            </div>
            <div class="card-content">
              <h5>{{ t.title }}</h5>
              <p>{{ t.desc }}</p>
              <div class="card-tags">
                <span v-for="(tg, gi) in t.tags" :key="gi" class="tag">{{ tg }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- 底部卡片區域 -->
    <section class="section-container" style="margin-top: 40px; padding-bottom: 40px;">
      <div class="card" id="culture-bottom" @click="go('home')">
        <h3>社區夥伴</h3>
        <p>人物專訪、社區夥伴、人才師資庫。</p>
      </div>
      <div class="card" id="wisdom-bottom" @click="go('experience')">
        <h3>經驗觀點</h3>
        <p>教師分享、活動分享、學員分享。</p>
      </div>
      <div class="card" id="language-bottom" @click="go('walking')">
        <h3>走讀新竹</h3>
        <p>山林系列、水資源系列。</p>
      </div>
      <div class="card" id="nature-bottom" @click="go('revitalization')">
        <h3>地方創生</h3>
        <p>優良店家採訪</p>
      </div>
      <div class="card" id="community-bottom" @click="go('ecology')">
        <h3>在地生態</h3>
        <p>濕地保育、溪流河域。</p>
      </div>
    </section>

    <footer class="footer">© 2025 新竹市科學城社區大學</footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

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
.nav {
  color: white;
  background-color: #3a7c5b;
  display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;
  padding: 12px 16px;  position: sticky; top: 0; z-index: 10;
}
.nav h1 { font-size: 18px; margin: 6px 0; }
.nav ul { list-style: none; display: flex; gap: 12px; padding: 0; margin: 0; flex-wrap: wrap; }
.nav a { text-decoration: none; color: white;   /* 改成白色 */; font-weight: 600; }
.nav a:hover {
  text-decoration: underline; /* 滑過時加底線（可選） */
  color: #f0f0f0; /* 或者稍微灰白 */
}

.section-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 20px;
}
/*
.section-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; padding: 16px; }
*/
    .card {
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      width: 150px;
      margin: 15px;
      padding: 15px;
      text-align: center;
      transition: transform 0.2s ease;
      cursor: pointer;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .card h3 {
      color: #3a7c5b;
      font-size: 16px;
      margin-bottom: 8px;
    }
    .card p {
      font-size: 14px;
      line-height: 1.4;
    }
    .card a {
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

    .content-area {
     /*display: none;*/
      max-width: 800px;
      margin: 0 auto 30px;
      padding: 30px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      clear: both;
    }
    .content-area.active {
      display: block;
    }
    .content-area h4 {
      color: #3a7c5b;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .content-area ul {
      list-style: none;
      padding: 0;
    }
    .content-area ul li {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
      color: #555;
    }
    .content-area ul li:last-child {
      border-bottom: none;
    }

/* 卡片樣式（共用） */
.interview-cards, .partner-cards, .talent-cards {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;
}
.interview-card, .partner-card, .talent-card {
  background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;
}
.interview-card:hover, .partner-card:hover, .talent-card:hover {
  transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
.card-image { width: 100%; height: 200px; overflow: hidden; }
.card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; display: block; }
.interview-card:hover .card-image img, .partner-card:hover .card-image img, .talent-card:hover .card-image img { transform: scale(1.05); }
.card-content { padding: 20px; }
.card-content h5 { color: var(--green); font-size: 18px; margin: 0 0 10px 0; font-weight: bold; }
.card-content p { color: #555; line-height: 1.6; margin: 0 0 15px 0; font-size: 14px; }
.card-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag { background-color: #e8f5e8; color: var(--green); padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }

@media (max-width: 768px) {
  .interview-cards, .partner-cards, .talent-cards { grid-template-columns: 1fr; }
}

.footer { text-align: center; padding: 24px 0; color: #777; }


</style>
