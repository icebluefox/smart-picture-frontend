<template>
  <div class="pic-search-pic bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-start lg:items-center gap-12">
        <!-- 左侧：内容介绍区域 -->
        <div class="w-full lg:w-1/2">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">智能以图搜图</h2>
          
          <div class="space-y-4 text-gray-600">
            <p class="text-base">
              图像胜过千言万语。我们创新的智能图像搜索技术，让您跳过繁琐的文字描述，直接通过图片找到心仪商品。只需上传一张图片，系统立即为您匹配相似产品，让购物体验更直观高效。
            </p>
            
            <p class="text-base">
              基于深度学习的图像识别引擎能够精准分析商品特征，从款式、材质到色彩，全方位比对市场中的同类产品。告别长时间浏览和关键词搜索的困扰，一键直达您的购物目标。
            </p>
            
            <p class="text-base">
              我们的局部识别功能支持您框选图片中特定区域进行精准搜索，无论是街拍中的包包还是家居照片中的装饰品，都能从海量商品库中找到最佳匹配。体验智能购物新方式，省时又省心。
            </p>
          </div>
          
          <div class="mt-8">
            <a href="#" class="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              上传图片搜索
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- 右侧：图片展示区域 -->
        <div class="w-full lg:w-1/2">
          <!-- 主搜索图片 -->
          <div class="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
            <div class="text-sm font-medium text-gray-500 mb-2 flex items-center">
              <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
              </svg>
              上传的搜索图片
            </div>
            <div class="relative rounded-md overflow-hidden border-2 border-dashed border-indigo-300 bg-indigo-50">
              <!-- 固定高度容器防止布局跳动 -->
              <div class="h-64 w-full">
                <img 
                  src="../../../assets/pexels-kellie-churchman-371878-1001682.jpg"
                  alt="搜索图片" 
                  class="w-full h-full object-cover will-change-transform"
                  loading="eager"
                  decoding="sync"
                />
              </div>
              <!-- 搜索图标覆盖 -->
              <div class="absolute inset-0 bg-indigo-900/20 flex items-center justify-center pointer-events-none">
                <div class="bg-white rounded-full p-3 shadow-lg">
                  <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 结果区域标题 -->
          <div class="flex justify-between items-center mt-5 mb-2">
            <div class="text-sm font-medium text-gray-500 flex items-center">
              <svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
              </svg>
              相似图片结果
            </div>
            <div class="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
              找到208张相似图片
            </div>
          </div>
          
          <!-- 搜索结果展示 -->
          <div class="grid grid-cols-3 gap-2">
            <div class="bg-white rounded-md shadow-sm p-2 transform hover:scale-105 transition-transform duration-300">
              <div class="relative rounded-md overflow-hidden h-24">
                <img 
                  src="../../../assets/pexels-matthardy-1533720.jpg"
                  alt="搜索结果1" 
                  class="w-full h-full object-cover will-change-transform"
                  loading="eager"
                  decoding="sync"
                />
                <div class="absolute bottom-1 right-1">
                  <span class="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-sm">98%匹配</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-md shadow-sm p-2 transform hover:scale-105 transition-transform duration-300">
              <div class="relative rounded-md overflow-hidden h-24">
                <img 
                  src="../../../assets/pexels-joshsorenson-386148.jpg"
                  alt="搜索结果2" 
                  class="w-full h-full object-cover will-change-transform"
                  loading="eager"
                  decoding="sync"
                />
                <div class="absolute bottom-1 right-1">
                  <span class="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-sm">95%匹配</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-md shadow-sm p-2 transform hover:scale-105 transition-transform duration-300">
              <div class="relative rounded-md overflow-hidden h-24">
                <img 
                  src="../../../assets/pexels-darinacico-103567.jpg"
                  alt="搜索结果3" 
                  class="w-full h-full object-cover will-change-transform"
                  loading="eager"
                  decoding="sync"
                />
                <div class="absolute bottom-1 right-1">
                  <span class="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-sm">87%匹配</span>
                </div>
              </div>
            </div>
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
    '../../../assets/pexels-kellie-churchman-371878-1001682.jpg',
    '../../../assets/pexels-matthardy-1533720.jpg',
    '../../../assets/pexels-joshsorenson-386148.jpg',
    '../../../assets/pexels-darinacico-103567.jpg'
  ];
  
  // 预加载图片
  imagePaths.forEach(path => {
    const img = new Image();
    img.src = path;
  });
});
</script>

<style scoped>
.pic-search-pic {
  position: relative;
  z-index: 1;
  /* 添加GPU加速以减少重排和重绘引起的闪烁 */
  transform: translateZ(0);
}

/* 防止图片加载闪烁 */
img {
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* 确保容器固定尺寸，防止布局跳动 */
.h-24, .h-64 {
  min-height: inherit;
  contain: strict;
}

/* 添加顺畅过渡 */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>