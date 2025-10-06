<template>
  <div>
    
    <p class="yt-description">
      1081221 新竹市科學城社區大學 幸福共學 聖誕同樂 成果展 立功社區
    </p>

    <div class="yt-wrap">
      <iframe
        src="https://www.youtube.com/embed/kImbPXUURxA"
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
  max-width: 800px;
  margin: 16px auto;
  aspect-ratio: 16 / 9;
}

.yt-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
