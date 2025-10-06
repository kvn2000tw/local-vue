<template>
  <div>
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
