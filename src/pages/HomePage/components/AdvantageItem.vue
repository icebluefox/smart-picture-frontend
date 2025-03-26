<template>
  <div class="pt-6">
    <div class="flow-root bg-white rounded-lg px-6 pb-8">
      <div class="-mt-6">
        <div>
          <span class="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    :d="iconPath" />
            </svg>
          </span>
        </div>
        <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ title }}</h3>
        <p class="mt-5 text-base text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  iconPath: string;
}>();
</script> 