<template>
  <div> 
    <h2 class="yt-title">南港採訪</h2>
        <p class="yt-description">
     
科學城璀璨二十111年春線上成果展 三早 藝起同遊～相＂繪＂南港
    </p>
    <div class="yt-wrap">
      <iframe
        src="https://www.youtube.com/embed/vQmXFyoNx_w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.yt-title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 24px;
  color: #2c3e50;
}
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
