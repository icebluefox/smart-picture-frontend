<template>
  <div class="relative custom-select" ref="customSelectRef">
    <button 
      ref="dropdownButtonRef"
      @click="toggleDropdown" 
      class="w-full h-12 bg-white border border-gray-200 rounded-lg pl-4 pr-10 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 relative text-base"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
    >
      <span :class="modelValue ? 'text-gray-700' : 'text-gray-500'" class="block truncate">
        {{ selectedLabel || placeholder }}
      </span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </span>
    </button>
    
    <transition name="fade">
      <div 
        v-if="isOpen" 
        ref="dropdownMenuRef"
        class="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden"
      >
        <div v-if="title" class="px-4 py-2 border-b border-gray-100 text-base font-semibold text-gray-800">
          {{ title }}
        </div>
        <div class="max-h-60 overflow-y-auto">
          <ul>
            <li 
              v-for="(option, index) in options" 
              :key="index" 
              @click="selectOption(option)"
              class="px-4 py-2 text-base text-gray-900 hover:bg-gray-100 cursor-pointer"
              :class="{'bg-gray-50 font-medium': isSelected(option)}"  
              role="option"
              :aria-selected="isSelected(option)"
            >
              {{ getOptionLabel(option) }}
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

// --- Interfaces --- 
interface OptionObject {
  value: string | number;
  label: string;
}

type Option = string | number | OptionObject;

// --- Props --- 
const props = defineProps({
  modelValue: { // for v-model
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array as () => Option[],
    required: true
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  title: { // Title for the dropdown menu, e.g., "Fruits"
    type: String,
    default: ''
  }
})

// --- Emits --- 
const emit = defineEmits(['update:modelValue'])

// --- State --- 
const isOpen = ref(false)
const customSelectRef = ref<HTMLElement | null>(null) // Ref for the root element
const dropdownButtonRef = ref<HTMLButtonElement | null>(null) // Ref for the trigger button
const dropdownMenuRef = ref<HTMLElement | null>(null) // Ref for the dropdown menu

// --- Computed --- 
const selectedLabel = computed(() => {
  const selectedOption = props.options.find(option => getOptionValue(option) === props.modelValue);
  return selectedOption ? getOptionLabel(selectedOption) : ''
})

// --- Methods --- 
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const getOptionValue = (option: Option): string | number => {
  return typeof option === 'object' && option !== null ? option.value : option;
}

const getOptionLabel = (option: Option): string => {
  return typeof option === 'object' && option !== null ? option.label : String(option);
}

const isSelected = (option: Option): boolean => {
  return getOptionValue(option) === props.modelValue
}

const selectOption = (option: Option) => {
  emit('update:modelValue', getOptionValue(option))
  isOpen.value = false // Close dropdown after selection
}

// --- Click Outside Logic --- 
const handleClickOutside = (event: MouseEvent) => {
  const rootEl = customSelectRef.value;
  // If the click is outside the component's root element, close the dropdown.
  if (rootEl && !rootEl.contains(event.target as Node)) {
    isOpen.value = false;
  }
  // Clicks inside the component (button or menu) are handled by their own @click handlers
  // or ignored, preventing the dropdown from closing unexpectedly.
};

onMounted(() => {
  // Use standard event listener without capture phase
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// Watch for modelValue changes externally (optional)
watch(() => props.modelValue, () => {
  // isOpen.value = false;
});

</script>

<style scoped>
.custom-select {
  min-width: 120px; 
}

/* Fade transition for the dropdown */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-out, transform 0.15s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

/* Scrollbar styling (optional) */
.max-h-60::-webkit-scrollbar {
  width: 6px;
}

.max-h-60::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.max-h-60::-webkit-scrollbar-thumb {
  background: #d1d5db; /* gray-400 */
  border-radius: 10px;
}

.max-h-60::-webkit-scrollbar-thumb:hover {
  background: #9ca3af; /* gray-500 */
}
</style> 