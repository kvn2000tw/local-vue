<template>
  <div>
    <h1>溪流河域</h1>
 <p class="yt-description">
      科學城璀璨二十111年春線上成果展 六早 走進大自然步出大健康-步道探索
    </p>
    <div class="yt-wrap">
      <iframe
        src="https://www.youtube.com/embed/5CDHg-J6x0M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.yt-description {
  font-size: 16px;
  text-align: center;
  margin: 8px auto 24px;
  max-width: 720px;
  color: #555;
  line-height: 1.6;
}
.yt-wrap {
  position: relative;
  width: 100%;
  max-width: 800px;   /* 可依需求調整最大寬度 */
  margin: 16px auto;  /* 置中 */
  aspect-ratio: 16 / 9;
}
.yt-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
