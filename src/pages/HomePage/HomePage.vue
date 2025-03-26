<template>
  <div class="home-page">
    <Hero></Hero>
    <Peculiarity></Peculiarity>
    <PicSearchPic></PicSearchPic>
    <Advantage></Advantage>
    <SpaceLevel></SpaceLevel>
  </div>
</template>

<script setup lang="ts">
// 没有特定的脚本逻辑
import Hero from "./components/Hero.vue";
import Advantage from "./components/Advantage.vue";
import Peculiarity from "./components/ZoomInPicture.vue";
import PicSearchPic from "./components/PicSearchPic.vue";
import SpaceLevel from "./components/SpaceLevel.vue";
</script>

<style scoped>
/* 页面容器样式 */
</style>