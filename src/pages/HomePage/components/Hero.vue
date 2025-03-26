<template>
  <div class="hero">
    <!-- 英雄区域 -->
    <div class="hero-section relative overflow-hidden bg-[#0e1621]">
      <!-- 背景图片和蒙版 -->
      <div class="absolute inset-0 z-0">
        <img
            src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg"
            alt="科技背景"
            class="w-full h-full object-cover object-center opacity-40"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0e1621]/80 to-[#0e1621]/60"></div>
      </div>

      <!-- 内容区域 -->
      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div class="max-w-7xl mx-auto">
          <!-- 主标题区域 -->
          <div class="text-center mb-6 md:mb-10">
            <h2 class="text-base text-indigo-400 mb-2 font-medium">专注于视觉创意的AI协作平台</h2>
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
              智能视觉协作
              <span class="block mt-1">一键释放创意潜能</span>
            </h1>
            <p class="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
              协创视界打破传统创意壁垒，提供一站式视觉素材管理、智能AI处理，让团队协作更高效
            </p>
          </div>

          <!-- 按钮区域 -->
          <div class="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4 mb-10">
            <a href="#" class="w-full md:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300 group">
              <span>免费试用</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="w-full md:w-auto px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              <span>观看演示视频</span>
            </a>
          </div>

          <!-- 下载按钮和信赖标签 -->
          <div class="flex flex-col items-center">
            <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mb-5">
              <a href="#" class="flex items-center justify-center px-4 py-1.5 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors">
                <svg class="w-6 h-6 text-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div>
                  <div class="text-xs text-gray-400">下载</div>
                  <div class="text-sm font-semibold text-white">iOS 版本</div>
                </div>
              </a>
              <a href="#" class="flex items-center justify-center px-4 py-1.5 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors">
                <svg class="w-6 h-6 text-white mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"/>
                </svg>
                <div>
                  <div class="text-xs text-gray-400">下载</div>
                  <div class="text-sm font-semibold text-white">Android 版本</div>
                </div>
              </a>
            </div>
            <p class="text-gray-400 text-xs mb-6">来自全球近百万用户的信赖</p>
          </div>

          <!-- 合作伙伴/客户标志 -->
          <div class="grid grid-cols-4 md:grid-cols-7 gap-3 md:gap-5 items-center justify-items-center">
            <div class="flex flex-col items-center">
              <svg class="h-6 w-6 mb-1 text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-xs text-gray-400">视创智能</span>
            </div>

            <div class="flex flex-col items-center">
              <svg class="h-6 w-6 mb-1 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L20 7V17L12 21L4 17V7L12 3Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 12L20 7" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 12L12 21" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 12L4 7" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="text-xs text-gray-400">图维科技</span>
            </div>

            <div class="flex flex-col items-center">
              <svg class="h-6 w-6 mb-1 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15" stroke="currentColor" stroke-width="1.5"/>
                <path d="M8 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H8" stroke="currentColor" stroke-width="1.5"/>
                <rect x="8" y="4" width="7" height="16" rx="1" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="text-xs text-gray-400">光影工坊</span>
            </div>

            <div class="flex flex-col items-center">
              <svg class="h-6 w-6 mb-1 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M21 12H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M12 21V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M3 12H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M18.3638 5.63623L15.5355 8.46447" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M18.3638 18.3638L15.5355 15.5355" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M5.63623 18.3638L8.46447 15.5355" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M5.63623 5.63623L8.46447 8.46447" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="text-xs text-gray-400">创想未来</span>
            </div>

            <div class="flex flex-col items-center">
              <svg class="h-6 w-6 mb-1 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9H21" stroke="currentColor" stroke-width="1.5"/>
                <path d="M9 21V9" stroke="currentColor" stroke-width="1.5"/>
                <path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="text-xs text-gray-400">智绘云</span>
            </div>

            <div class="flex flex-col items-center">
              <svg class="h-6 w-6 mb-1 text-pink-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16 12H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="text-xs text-gray-400">美影数字</span>
            </div>

            <div class="flex flex-col items-center">
              <svg class="h-6 w-6 mb-1 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9H18L17 21H7L6 9Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M10 4C10 3.44772 10.4477 3 11 3H13C13.5523 3 14 3.44772 14 4V9H10V4Z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="text-xs text-gray-400">锋视科技</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero-section {
  min-height: auto;
  padding: 2rem 0;
}

@media (min-width: 768px) {
  .hero-section {
    min-height: auto;
    max-height: 100vh;
    padding: 2rem 0;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding: 3rem 0;
  }
}
</style>