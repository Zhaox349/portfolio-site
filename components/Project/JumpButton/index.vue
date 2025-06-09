<template>
  <NuxtLink class="button" :href="url" target="_blank">
    <img src="/icon/arrow_link.png" alt="arrow_link" />
    <div class="text">Visit Website</div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.button {
  width: 216px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  border-radius: 30px;
  background: #5cff85;
  text-decoration: none;
  img {
    width: 23px;
    height: 23px;
  }
  .text {
    color: #fff;
    text-align: center;
    font-family: "Neue Haas Grotesk Display Pro";
    font-size: 23px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
</style>
