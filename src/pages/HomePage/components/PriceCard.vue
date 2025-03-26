<template>
  <div class="relative" :class="[
    isHighlighted ? 'bg-indigo-600' : 'bg-white border border-gray-100',
    'rounded-2xl shadow-lg p-8 transition-transform hover:scale-105'
  ]">
    <!-- 推荐标签 -->
    <div v-if="isRecommended" class="absolute -top-4 right-8">
      <span class="bg-yellow-400 text-indigo-900 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
        推荐方案
      </span>
    </div>

    <h3 class="text-xl font-semibold" :class="isHighlighted ? 'text-white' : 'text-gray-900'">{{ title }}</h3>
    <p class="mt-2" :class="isHighlighted ? 'text-indigo-200' : 'text-gray-500'">{{ description }}</p>
    
    <div class="mt-6">
      <span class="text-4xl font-bold" :class="isHighlighted ? 'text-white' : 'text-gray-900'">{{ price }}</span>
      <span v-if="price !== '免费'" :class="isHighlighted ? 'text-indigo-200' : 'text-gray-500'">/月</span>
    </div>

    <ul class="mt-8 space-y-4">
      <li v-for="(feature, index) in features" :key="index" class="flex items-center">
        <svg class="w-5 h-5" :class="isHighlighted ? 'text-indigo-200' : 'text-indigo-500'" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span class="ml-3" :class="isHighlighted ? 'text-white' : 'text-gray-600'">{{ feature }}</span>
      </li>
    </ul>

    <button 
      class="mt-8 w-full py-3 px-6 rounded-lg font-medium transition-colors"
      :class="buttonClasses"
      @click="$emit('action-click')"
    >
      {{ actionText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  description: string
  price: string
  features: string[]
  actionText: string
  isHighlighted?: boolean
  isRecommended?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isHighlighted: false,
  isRecommended: false
})

defineEmits<{
  (e: 'action-click'): void
}>()

const buttonClasses = computed(() => {
  return props.isHighlighted
    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
    : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
})
</script>

<style scoped>
.hover\:scale-105 {
  transition: transform 0.3s ease;
}
</style> 