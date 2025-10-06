<template>
  <div>
    <h1>人材師資庫</h1>

    <div class="yt-row">
      <!-- 第一行影片 -->
      <div class="yt-wrap">
        <iframe
          src="https://www.youtube.com/embed/3knvIkMO2qA"
          title="YouTube video 1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div class="yt-wrap">
        <iframe
          src="https://www.youtube.com/embed/brf8UHJsTaA"
          title="YouTube video 2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div class="yt-wrap">
        <iframe
          src="https://www.youtube.com/embed/09JWfeTcNsQ"
          title="YouTube video 3"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="yt-wrap">
        <iframe
          src="https://www.youtube.com/embed/LxDfsloN0mY"
          title="YouTube video 3"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="yt-wrap">
        <iframe
          src="https://www.youtube.com/embed/Hw-ZkcUgsYI"
          title="YouTube video 3"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="yt-wrap">
        <iframe
          src="https://www.youtube.com/embed/RXTrxUBdBc0"
          title="YouTube video 3"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

    </div>
  </div>
</template>


<style scoped>
.yt-row {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* 每個影片容器 */
.yt-wrap {
  position: relative;
  flex: 1 1 30%;   /* 預設桌機一行三個 */
  max-width: 400px;
  aspect-ratio: 16 / 9;
}

.yt-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* 平板：一行兩個 */
@media (max-width: 1024px) {
  .yt-wrap {
    flex: 1 1 45%;
  }
}

/* 手機：一行一個 */
@media (max-width: 600px) {
  .yt-wrap {
    flex: 1 1 100%;
  }
}
</style>
