<template>
  <div class="report">
    <h1>十八尖山寶山路口登山步道探勘盤點紀錄</h1>
    <p>日期：115年5月26日 (週二)</p>
    <p>出發時間：9:26 ～ 10:48</p>

    <!-- 防空洞步道 -->
    <section>
      <h2>防空洞步道</h2>
      <table>
        <thead>
          <tr>
            <th>盤點</th>
            <th>圖片</th>
            <th>缺失</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in bunkerSection" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
              <img v-for="(img, index) in item.imgs" :key="index" :src="img" alt="防空洞圖片" />
            </td>
            <td>{{ item.issue }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 沿途植物 -->
    <section>
      <h2>往上的山路路徑</h2>
      <table>
        <thead>
          <tr>
            <th>盤點</th>
            <th>圖片</th>
            <th>缺失</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in pathSection" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
              <figure v-for="(group, gIndex) in item.imgs" :key="gIndex" style="display:inline-block; margin:6px;">
                <figcaption v-html="item.title[gIndex]"></figcaption>
                <div>
                  <img v-for="(img, index) in group" :key="index" :src="img" :alt="`圖片${index+1}`" />
                </div>
              </figure>
            </td>
            <td>{{ item.issue }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 中途涼亭 -->
    <section>
      <h2>中途涼亭<br>(編號20飲水機)</h2>
      <table>
        <thead>
          <tr>
            <th>盤點</th>
            <th>圖片</th>
            <th>缺失</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in pavilion" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
              <figure v-for="(group, gIndex) in item.imgs" :key="gIndex" style="display:inline-block; margin:6px;">
                <figcaption v-html="item.title[gIndex]"></figcaption>
                <div>
                  <img v-for="(img, index) in group" :key="index" :src="img" :alt="`圖片${index+1}`" />
                </div>
              </figure>
            </td>
            <td>{{ item.issue }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 下山路徑 -->
    <section>
      <h2>紀念合照</h2>
      <img :src="downhill.img" alt="下山路徑照片" />
    </section>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const imgBase = instance?.appContext.config.globalProperties.$env?.apiUrl || ''

const bunkerSection = [
  { id: 1, name: "八個防空洞 (北118-07-北118-14)", issue: "洞內黑暗，雨天後會有積水", imgs: [`${imgBase}/img/2026-05-26/002.jpg`] },
  { id: 2, name: "九個大小告示牌", issue: "髒污、字跡不清", imgs: [`${imgBase}/img/2026-05-26/003.png`, `${imgBase}/img/2026-05-26/004.png`, `${imgBase}/img/2026-05-26/005.png`] },
  { id: 3, name: "六座造型木椅", issue: "溼氣重，木椅皆有青苔", imgs: [`${imgBase}/img/2026-05-26/006.png`, `${imgBase}/img/2026-05-26/007.png`] },
]

const pathSection = [
  { id: 1, name: "植物等告示牌", issue: "髒污、字跡不清", title: ['','',''],
    imgs: [[`${imgBase}/img/2026-05-26/008.png`], [`${imgBase}/img/2026-05-26/009.png`], [`${imgBase}/img/2026-05-26/010.png`]] },
  { id: 2, name: "沿途植物", issue: "山林生態與人文教育", 
    title: ['相思樹-客家人木炭原料', '月桃-粽葉粽香', '觀音竹-竹編器具'],
    imgs: [[`${imgBase}/img/2026-05-26/011.png`], [`${imgBase}/img/2026-05-26/012.png`], [`${imgBase}/img/2026-05-26/013.png`]] },
]

const pavilion = [
  { id: 1, name: "有涼亭", issue: "中間休息處，可設計五感體驗", title: [''],
    imgs: [[`${imgBase}/img/2026-05-26/025.png`, `${imgBase}/img/2026-05-26/026.png`]] },
  { id: 2, name: "有飲水機", issue: "", title: [''],
    imgs: [[`${imgBase}/img/2026-05-26/027.png`]] },
]

const downhill = {
  img: `${imgBase}/img/2026-05-26/038.png`
}
</script>

<style scoped>
.report {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}
h1, h2 {
  color: #2c3e50;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
img {
  max-width: 100%;
  height: auto;
  margin: 6px 0;
  border-radius: 4px;
}

/* 響應式：手機版改成卡片式 */
@media (max-width: 768px) {
  table, tr, td, th, thead, tbody {
    display: block;
    width: 100%;
  }
  tr {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 6px;
    background: #f9f9f9;
  }
  thead {
    display: none; /* 隱藏表頭 */
  }
  td {
    border: none;
    padding: 6px 0;
  }
  td img {
    margin: 6px auto;
    display: block;
  }
}
</style>