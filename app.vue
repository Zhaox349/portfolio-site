<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- 全屏图片显示组件 -->
  <div v-if="isFullscreen" class="fullscreen-image" @click="exitFullscreen">
    <img :src="fullscreenImageSrc" :alt="fullscreenImageAlt" />
  </div>
</template>

<script setup>
const isFullscreen = ref(false);
const fullscreenImageSrc = ref("");
const fullscreenImageAlt = ref("");

// 进入全屏显示
const enterFullscreen = (src, alt) => {
  fullscreenImageSrc.value = src;
  fullscreenImageAlt.value = alt;
  isFullscreen.value = true;
  document.body.style.overflow = "hidden";
};

// 退出全屏显示
const exitFullscreen = () => {
  isFullscreen.value = false;
  document.body.style.overflow = "";
};

// 全局事件处理
onMounted(() => {
  const images = document.querySelectorAll("img:not(.fullscreen-image img)");
  images.forEach((img) => {
    const className = img.classList.join(" ");
    if (className.includes("page-")) return;
    img.addEventListener("click", () => enterFullscreen(img.src, img.alt));
  });
});
</script>

<style lang="scss">
.fullscreen-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: pointer;

  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
}
</style>
