<template>
  <div v-if="isFullscreen" class="fullscreen-image" @click="exitFullscreen">
    <img v-fullscreen-image :src="imageSrc" :alt="imageAlt" />
  </div>
</template>

<script setup>
const isFullscreen = ref(false);
const imageSrc = ref("");
const imageAlt = ref("");

// 进入全屏显示
const enterFullscreen = (src, alt) => {
  imageSrc.value = src;
  imageAlt.value = alt;
  isFullscreen.value = true;
  document.body.style.overflow = "hidden";
};

// 退出全屏显示
const exitFullscreen = () => {
  isFullscreen.value = false;
  document.body.style.overflow = "";
};

// 暴露方法给父组件
defineExpose({
  enterFullscreen,
});
</script>

<style lang="scss" scoped>
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
