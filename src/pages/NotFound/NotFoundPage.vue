<template>
  <div class="not-found-page min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="max-w-4xl w-full mx-auto px-4 py-12 text-center">
      <!-- 404 图形和动画 -->
      <div class="relative mb-8 overflow-hidden">
        <svg class="mx-auto" width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- 404 文字 -->
          <path d="M40 180V150L80 90V60H40V40H100V90L60 150V160H100V180H40Z" fill="url(#gradient1)"/>
          <path d="M120 180V40H140V90H170V40H190V180H170V110H140V180H120Z" fill="url(#gradient2)"/>
          <path d="M210 180V150L230 120L210 90V60H230V90L250 120L230 150V180H210Z" fill="url(#gradient3)"/>
          
          <!-- 装饰元素 -->
          <circle cx="120" cy="120" r="100" stroke="url(#gradient4)" stroke-width="8" stroke-dasharray="10 15" class="animate-spin-slow"/>
          <circle cx="120" cy="120" r="60" stroke="url(#gradient5)" stroke-width="5" stroke-opacity="0.7" stroke-dasharray="5 10" class="animate-spin-reverse"/>
          
          <!-- 渐变定义 -->
          <defs>
            <linearGradient id="gradient1" x1="40" y1="40" x2="100" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#4F46E5"/>
              <stop offset="100%" stop-color="#4338CA"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="120" y1="40" x2="190" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#4F46E5"/>
              <stop offset="100%" stop-color="#4338CA"/>
            </linearGradient>
            <linearGradient id="gradient3" x1="210" y1="60" x2="250" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#4F46E5"/>
              <stop offset="100%" stop-color="#4338CA"/>
            </linearGradient>
            <linearGradient id="gradient4" x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#818CF8"/>
              <stop offset="100%" stop-color="#4338CA"/>
            </linearGradient>
            <linearGradient id="gradient5" x1="60" y1="60" x2="180" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#6366F1"/>
              <stop offset="100%" stop-color="#3730A3"/>
            </linearGradient>
          </defs>
        </svg>
        
        <!-- 漂浮的几何元素 -->
        <div class="absolute top-0 left-1/4 w-8 h-8 bg-indigo-300 rounded-full opacity-70 animate-float"></div>
        <div class="absolute bottom-1/4 right-1/4 w-6 h-6 bg-indigo-400 rounded-full opacity-60 animate-float-delay"></div>
        <div class="absolute top-1/3 right-1/4 w-4 h-4 bg-indigo-400 rounded opacity-50 animate-float-slow"></div>
        <div class="absolute bottom-0 left-1/3 w-5 h-5 bg-indigo-300 rounded-lg opacity-50 animate-float-reverse"></div>
      </div>
      
      <!-- 文字内容 -->
      <h1 class="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-700">
        页面未找到
      </h1>
      <p class="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
        很抱歉，您访问的页面不存在或已被移除。请返回首页继续浏览其他精彩内容。
      </p>
      
      <!-- 返回首页按钮 -->
      <router-link to="/" class="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        返回首页
      </router-link>
      
      <!-- 搜索建议 -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <h3 class="text-xl font-medium text-gray-800 mb-4">您可能感兴趣的内容</h3>
        <div class="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          <router-link to="/" class="px-4 py-2 rounded-md border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
            热门图片
          </router-link>
          <router-link to="/" class="px-4 py-2 rounded-md border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
            风景摄影
          </router-link>
          <router-link to="/" class="px-4 py-2 rounded-md border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
            艺术创作
          </router-link>
          <router-link to="/" class="px-4 py-2 rounded-md border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
            城市建筑
          </router-link>
          <router-link to="/" class="px-4 py-2 rounded-md border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
            人像摄影
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* 动画效果 */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes float-delay {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(12px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 5s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-reverse {
  animation: float-reverse 5s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
  transform-origin: center;
}

.animate-spin-reverse {
  animation: spin-reverse 15s linear infinite;
  transform-origin: center;
}
</style> 