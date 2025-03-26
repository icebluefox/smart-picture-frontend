<template>
  <div class="peculiarity bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-start lg:items-center gap-12">
        <!-- 扩图效果展示 -->
        <div class="w-full lg:w-1/2 relative">
          <!-- 原图 -->
          <div class="rounded-lg overflow-hidden shadow-md">
            <img 
              src="../../../assets/pexels-cottonbro-6895844-3-4.jpeg"
              alt="原始图片" 
              class="w-full h-auto"
              loading="eager"
            />
          </div>
          <!-- 左侧：图片展示区域 -->
          <div class="absolute -top-10 -right-10 w-1/3">
            <div class="bg-white/20 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border-4 border-white">
              <img 
                src="../../../assets/pexels-cottonbro-6895844.jpg"
                alt="扩图效果" 
                class="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
        
        <!-- 右侧：内容介绍区域 -->
        <div class="w-full lg:w-1/2">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">智能扩图</h2>
          
          <div class="space-y-4 text-gray-600">
            <p class="text-base">
              突破创意边界，让图片自由呼吸。我们的AI智能扩图技术能自动识别图像边缘，智能生成高质量扩展内容，让您的作品不再受限于原始构图。
            </p>
            
            <p class="text-base">
              适配全平台展示需求，一键生成Instagram、微信朋友圈、电商平台等多种比例规格。无论是方形、横版还是竖版，都能完美呈现，为您节省大量重新拍摄或裁剪的时间。
            </p>
            
            <p class="text-base">
              告别传统PS手动扩图的繁琐，我们的AI算法能在秒级时间内完成高质量扩展，让您专注于创意本身。即使是复杂背景，也能保持无缝连接，犹如原图一般自然。
            </p>
          </div>
          
          <div class="mt-8">
            <a href="#" class="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              立即体验
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// 预加载图片以避免加载延迟造成的布局跳动
onMounted(() => {
  const imagePaths = [
    '../../../assets/pexels-cottonbro-6895844-3-4.jpeg',
    '../../../assets/pexels-cottonbro-6895844.jpg'
  ];
  
  // 预加载图片
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
});
</script>

<style scoped>
.peculiarity {
  position: relative;
  z-index: 1;
}

/* 图片加载优化 */
img {
  display: block;
  opacity: 1 !important;
}

/* 确保图片容器尺寸稳定 */
.rounded-lg.overflow-hidden {
  min-height: 100px;
}

/* 绝对定位元素稳定性 */
.absolute {
  will-change: transform;
}
</style>