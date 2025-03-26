<template>
  <div class="masonry-column" ref="columnRef">
    <template v-for="(image, index) in columnImages" :key="index">
      <!-- 骨架屏 -->
      <ImageSkeleton v-if="!loadedImageIds.includes(String(image.id))" />
      
      <!-- 图片卡片 -->
      <ImageCard
        v-show="loadedImageIds.includes(String(image.id))"
        :image="image"
        @toggle-favorite="$emit('toggle-favorite', $event)"
        @share="$emit('share', $event)"
        @download="$emit('download', $event)"
        @click="$emit('image-click', $event)"
      />
    </template>
    
    <div class="observer-target" ref="observerTarget"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import ImageCard from './ImageCard.vue'
import ImageSkeleton from './ImageSkeleton.vue'

// 使用与 ImageCard 兼容的类型定义
import { PicturePagePictureVo } from "../../../api/picture-service";
type ImageData = PicturePagePictureVo;

const props = defineProps<{
  images: ImageData[]
  columnIndex: number
  columnCount: number
}>()

const emit = defineEmits<{
  (e: 'toggle-favorite', image: ImageData): void
  (e: 'share', image: ImageData): void
  (e: 'download', image: ImageData): void
  (e: 'image-click', image: ImageData): void
  (e: 'load-more'): void
}>()

const columnImages = computed(() => {
  return props.images.filter((_, index) => index % props.columnCount === props.columnIndex)
})

// 图片加载状态 - 使用数组而不是Set
const loadedImageIds = ref<string[]>([])

// 预加载图片
const preloadImages = () => {
  columnImages.value.forEach(image => {
    const imageId = String(image.id)
    if (!loadedImageIds.value.includes(imageId)) {
      const img = new Image()
      img.onload = () => {
        loadedImageIds.value.push(imageId) // 加载完成，添加到已加载集合
      }
      img.onerror = () => {
        loadedImageIds.value.push(imageId) // 即使加载失败也标记为已加载
      }
      img.src = image.url
    }
  })
}

// 监听图片数组变化，预加载新图片
watch(() => props.images, () => {
  preloadImages()
}, { deep: true })

// 观察器相关
const columnRef = ref<HTMLElement | null>(null)
const observerTarget = ref<HTMLElement | null>(null)

onMounted(() => {
  preloadImages() // 初始加载图片
  
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      emit('load-more')
    }
  }, {
    root: null,
    rootMargin: '100px',
    threshold: 0
  })

  if (observerTarget.value) {
    observer.observe(observerTarget.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<style scoped>
.masonry-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.observer-target {
  width: 100%;
  height: 10px;
}
</style> 