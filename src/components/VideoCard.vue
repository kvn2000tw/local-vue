<template>
  <div class="yt-wrap">
    <a
      :href="`https://www.youtube.com/watch?v=${videoId}`"
      target="_blank"
      rel="noopener noreferrer"
      class="yt-link"
    >
      <img
        :src="`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`"
        :alt="title"
        class="yt-thumbnail"
      />
    </a>
    <p class="yt-caption">{{ caption }}</p>
  </div>
</template>

<script setup>
defineProps({
  videoId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'YouTube video'
  },
  caption: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.yt-wrap {
  flex: 1 1 30%;
  max-width: 400px;
  text-align: center;
}

.yt-link {
  display: block;
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.yt-link:hover {
  transform: scale(1.02);
}

.yt-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.yt-caption {
  margin-top: 8px;
  font-size: 14px;
  color: #444;
}
</style>
