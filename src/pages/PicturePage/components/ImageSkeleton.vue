<template>
  <div class="image-skeleton animate-pulse">
    <div class="relative w-full overflow-hidden rounded-lg bg-gray-200">
      <!-- 使用padding-bottom来保持宽高比 -->
      <div class="pb-[75%]"></div>
      
      <!-- 模拟图片信息区域 -->
      <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-200 to-transparent">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-gray-300"></div>
          <div class="h-4 w-24 bg-gray-300 rounded"></div>
        </div>
        <div class="h-3 w-3/4 bg-gray-300 rounded mt-2"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 骨架屏组件不需要任何props或逻辑
</script>

<style scoped>
.image-skeleton {
  margin-bottom: 0.5rem;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style> 