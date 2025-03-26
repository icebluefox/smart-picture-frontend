<template>
  <div 
    class="masonry-item break-inside-avoid mb-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
    @click="handleImageClick"
  >
    <div class="relative group">
      <!--          picture.thumbnailUrl ?? picture.url-->
      <img
        :src="image.compressUrl??image.url"
        :alt="image.picName"
        class="w-full h-auto object-cover"
      >
      <div class="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4">
          <!-- 顶部操作按钮 -->
          <div class="flex justify-end space-x-2">
            <button 
              class="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-colors"
              @click.stop="$emit('toggle-favorite', image)"
            >
              <svg 
                class="w-5 h-5 drop-shadow" 
                :class="{ 'fill-red-500 stroke-red-500': image.isFavorite }"
                :fill="image.isFavorite ? 'currentColor' : 'none'" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button 
              class="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-colors"
              @click.stop="$emit('share', image)"
            >
              <svg class="w-5 h-5 drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button 
              class="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white transition-colors"
              @click.stop="$emit('download', image)"
            >
              <svg class="w-5 h-5 drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
          
          <!-- 底部作者信息 -->
          <div class="flex items-center space-x-3">
            <div class="flex-shrink-0">
              <img 
                :src="image.avatar || defaultAvatar"
                class="w-10 h-10 rounded-full border-2 border-white/50 object-cover"
                :alt="image.author"
              >
            </div>
            <div class="flex-grow">
              <div class="text-white drop-shadow-lg">
                <p class="font-medium text-lg leading-tight">{{ image.author }}</p>
                <p class="text-sm mt-0.5 text-white/90">{{ image.picName }}</p>
<!--                <p class="text-xs mt-0.5 text-white/70">{{ image.category }} | {{ image.tags.join(', ') }}</p>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// 定义props
import {PicturePagePictureVo} from "../../../api/picture-service";
import {onMounted} from "vue";

const props = defineProps<{
  image: PicturePagePictureVo;
}>()

onMounted(()=>{

})

// 定义事件
const emit = defineEmits<{
  (e: 'toggle-favorite', image: PicturePagePictureVo): void;
  (e: 'share', image: PicturePagePictureVo): void;
  (e: 'download', image: PicturePagePictureVo): void;
  (e: 'click', image: PicturePagePictureVo): void;
}>()

// 默认头像
const defaultAvatar = 'https://images.pexels.com/photos/default-avatar.jpg'

// 处理图片点击
const handleImageClick = () => {
  emit('click', props.image)
}
</script>

<style scoped>
.masonry-item {
  display: inline-block;
  width: 100%;
}

.break-inside-avoid {
  break-inside: avoid;
}
</style> 
