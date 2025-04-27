<template>
  <div class="picture-upload-page bg-gray-50 min-h-screen py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 页面标题 -->
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900">上传素材</h1>
        <p class="mt-1 text-gray-600">分享你的高质量图片，为社区做出贡献</p>
      </div>

      <!-- 上传区域 - 当没有选择文件时显示 -->
      <div v-if="selectedFiles.length === 0" class="bg-white shadow rounded-lg p-4 mb-4">
        <div 
          class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors duration-300"
          :class="{ 'border-indigo-500': isDragging }"
          @dragenter.prevent="isDragging = true"
          @dragover.prevent="isDragging = true"
          @dragleave.prevent="isDragging = false"
          @drop.prevent="onDrop"
        >
          <div class="space-y-4">
            <div class="flex justify-center">
              <div class="w-24 h-24 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full text-indigo-400">
                  <path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm11.5 8.5L19 16v-4h-4l2.5 2.5zM6.5 7.5L9 5h4l-2.5 2.5 3 3L11 13l-3-3-1.5 1.5z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-medium text-gray-900">拖放</h3>
            <p class="text-md text-gray-700">以进行上传，或</p>
            <div>
              <label for="file-upload" class="relative cursor-pointer bg-indigo-600 rounded-md font-medium text-white px-6 py-2.5 hover:bg-indigo-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 transition duration-200">
                <span>浏览</span>
                <input 
                  id="file-upload" 
                  name="file-upload" 
                  type="file" 
                  class="sr-only" 
                  multiple 
                  accept="image/*"
                  @change="onFileSelected"
                >
              </label>
            </div>
            <p class="text-sm text-gray-500 mt-2">支持 JPG, PNG, GIF 格式，单张图片最大 3MB</p>
          </div>
        </div>

        <!-- 使用规则说明 -->
        <div class="mt-8 px-2">
          <div class="max-w-3xl mx-auto border border-gray-200 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div class="p-4 flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h3 class="text-sm font-medium text-gray-900">你的原创内容</h3>
                  <p class="mt-1 text-xs text-gray-500">确保你有权分享上传的内容</p>
                </div>
              </div>
              <div class="p-4 flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <div>
                  <h3 class="text-sm font-medium text-gray-900">高质量图片</h3>
                  <p class="mt-1 text-xs text-gray-500">优先上传清晰、美观的图片</p>
                </div>
              </div>
              <div class="p-4 flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="text-sm font-medium text-gray-900">免费使用</h3>
                  <p class="mt-1 text-xs text-gray-500">上传的图片将可供社区免费使用</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-6 text-xs text-gray-500">
            通过上传，你同意我们的<a href="#" class="text-indigo-600 hover:text-indigo-800">服务条款</a>和<a href="#" class="text-indigo-600 hover:text-indigo-800">社区规范</a>
          </div>
        </div>
      </div>

      <!-- 错误提示 UI -->
      <div v-if="activeFile && activeFile.size > MAX_FILE_SIZE" class="bg-pink-50 rounded-lg p-6 mb-6">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="h-6 w-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <div class="ml-3 flex-1">
            <h3 class="text-sm font-medium text-red-800">错误</h3>
            <div class="mt-2 text-sm text-red-700">
              <p>上传内容的大小必须至少为 4 百万像素。无法发布这张图片。</p>
            </div>
            <div class="mt-4">
              <div class="-mx-2 -my-1.5 flex">
                <button 
                  type="button" 
                  @click="removeFile(activeFileIndex)"
                  class="rounded-md bg-pink-50 px-2 py-1.5 text-sm font-medium text-red-800 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-pink-50"
                >
                  浏览新图片
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 图片编辑区域 - 当选择了文件后显示 -->
      <div v-if="selectedFiles.length > 0" class="mb-4">
        <div class="flex justify-between items-center mb-3">
          <h2 class="text-xl font-bold text-gray-900">已选择 {{ selectedFiles.length }} 张图片</h2>
          
          <!-- 添加更多图片按钮 -->
          <label for="add-more-files" class="cursor-pointer bg-white border border-gray-300 rounded-md font-medium text-gray-700 px-3 py-1.5 hover:bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <span>添加更多图片</span>
            <input 
              id="add-more-files" 
              name="add-more-files" 
              type="file" 
              class="sr-only" 
              multiple 
              accept="image/*"
              @change="onFileSelected"
            >
          </label>
        </div>
        
        <div class="bg-white shadow rounded-lg overflow-hidden">
          <div class="flex flex-col lg:flex-row gap-4">
            <!-- 左侧选择栏 -->
            <div class="hidden md:block w-20 bg-gray-100 p-2 overflow-y-auto md:max-h-[calc(100vh-350px)]">
              <div 
                v-for="(file, idx) in selectedFiles" 
                :key="idx"
                class="mb-3 relative cursor-pointer group"
                @click="activeFileIndex = idx"
              >
                <div 
                  class="relative overflow-hidden rounded-md border-2 transition-all duration-200"
                  :class="idx === activeFileIndex ? 'border-indigo-500' : 'border-transparent hover:border-gray-300'"
                >
                  <img 
                    :src="file.preview" 
                    alt="缩略图" 
                    class="w-full aspect-square object-cover"
                  />
                  
                  <!-- 删除按钮 - 调整为悬浮显示 -->
                  <button 
                    @click.stop="removeFile(idx)" 
                    class="absolute top-1 right-1 bg-white rounded-full p-1 hover:bg-gray-100 group-hover:opacity-100 opacity-0 transition-opacity duration-200"
                    title="删除图片"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3.5 h-3.5 text-gray-600">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <!-- 图片序号 -->
                <div class="absolute -top-1 -left-1 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {{ idx + 1 }}
                </div>
              </div>
              
              <!-- 添加更多图片按钮 -->
              <label
                for="add-more-sidebar"
                class="block w-full h-16 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <input 
                  id="add-more-sidebar" 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  class="sr-only"
                  @change="onFileSelected"
                />
              </label>
            </div>
            
            <!-- 在小屏幕上显示的图片导航 -->
            <div class="md:hidden flex overflow-x-auto py-2 px-4 gap-2 bg-gray-100 mb-4">
              <div 
                v-for="(file, idx) in selectedFiles" 
                :key="idx"
                class="relative flex-shrink-0 w-16 cursor-pointer"
                @click="activeFileIndex = idx"
              >
                <div 
                  class="relative overflow-hidden rounded-md border-2 transition-all duration-200 aspect-square"
                  :class="idx === activeFileIndex ? 'border-indigo-500' : 'border-transparent hover:border-gray-300'"
                >
                  <img 
                    :src="file.preview" 
                    alt="缩略图" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="absolute -top-1 -left-1 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {{ idx + 1 }}
                </div>
              </div>
            </div>
            
            <!-- 主要内容区 -->
            <div class="flex-1 p-3">
              <div class="flex flex-col lg:flex-row gap-3">
                <!-- 中部 - 当前图片预览 -->
                <div class="w-full lg:w-1/2 lg:max-w-lg">
                  <div class="bg-white rounded-lg p-3 border border-gray-100 shadow-sm h-full">
                    <div class="bg-transparent rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 p-1 h-[320px]">
                      <img 
                        v-if="activeFile" 
                        :src="activeFile.preview" 
                        alt="图片预览" 
                        class="w-full h-full object-contain rounded"
                      />
                    </div>
                    <div class="mt-1.5 text-sm text-gray-500 flex justify-between">
                      <span v-if="activeFile">{{ activeFile.name }}</span>
                      <span v-if="activeFile" class="text-indigo-600 font-medium">{{ formatFileSize(activeFile.size) }}</span>
                    </div>
                    
                    <!-- 上传进度 -->
                    <div class="mt-2" v-if="isUploading">
                      <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-indigo-600 h-2 rounded-full" :style="{width: uploadProgress + '%'}"></div>
                      </div>
                      <div class="flex justify-between mt-1">
                        <span class="text-xs text-gray-500">上传中...</span>
                        <span class="text-xs text-gray-500">{{ uploadProgress }}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 右侧 - 图片信息表单 -->
                <div class="w-full lg:w-1/2">
                  <div v-if="activeFile" class="space-y-2.5 bg-white rounded-lg p-3 border border-gray-100 shadow-sm h-full">
                    <!-- 标题 -->
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        标题 <span class="text-gray-400 ml-1">(可选)</span>
                      </label>
                      <input 
                        type="text" 
                        v-model="activeFile.info.picName" 
                        class="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm transition-all duration-200 hover:border-gray-400 px-3 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" 
                        placeholder="输入标题"
                      >
                    </div>
                    
                    <!-- 标签 -->
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        标签 <span class="text-gray-400 ml-1">(可选)</span>
                      </label>
                      <div class="relative">
                        <div class="flex gap-2">
                          <div class="relative flex-1">
                            <CustomSelect
                              v-if="activeFile"
                              v-model="newTags[activeFileIndex]"
                              :options="tagOptions"
                              placeholder="选择标签"
                            />
                          </div>
                          <button 
                            @click="addTag(activeFileIndex)" 
                            class="px-3 py-1.5 text-sm bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-gray-300 rounded-md transition-colors duration-200 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500 whitespace-nowrap"
                          >
                            添加
                          </button>
                        </div>
                      </div>
                      <div class="flex flex-wrap mt-1.5 gap-1.5 py-1">
                        <span 
                          v-for="(tag, tagIndex) in activeFile?.info?.tags || []" 
                          :key="tagIndex"
                          class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {{ tag }}
                          <button 
                            @click="removeTag(activeFileIndex, tagIndex)" 
                            type="button" 
                            class="ml-1 flex-shrink-0 h-3.5 w-3.5 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:text-white transition-colors duration-200"
                          >
                            <span class="sr-only">移除标签</span>
                            <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                              <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                            </svg>
                          </button>
                        </span>
                      </div>
                    </div>
                    
                    <!-- 分类 -->
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        分类 <span class="text-gray-400 ml-1">(可选)</span>
                      </label>
                      <CustomSelect
                        v-if="activeFile"
                        v-model="activeFile.info.category"
                        :options="categoryOptions"
                        placeholder="选择分类"
                      />
                    </div>
                    
                    <!-- 简介 -->
                    <div class="flex-grow">
                      <label class="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                        简介 <span class="text-gray-400 ml-1">(可选)</span>
                      </label>
                      <textarea 
                        v-model="activeFile.info.introduction" 
                        rows="3" 
                        class="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm transition-all duration-200 hover:border-gray-400 px-3 py-1.5 resize-none focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" 
                        placeholder="添加简短的描述..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 底部区域 -->
          <div class="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center mt-4">
            <div class="text-sm text-gray-500 flex items-center">
              <span class="inline-flex items-center justify-center bg-indigo-600 text-white w-5 h-5 rounded-full mr-1.5 text-xs">
                {{ activeFileIndex + 1 }}
              </span>
              <span>/ {{ selectedFiles.length }}</span>
            </div>
            
            <div class="flex gap-2">
              <button 
                type="button"
                @click="prevImage" 
                class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                :disabled="activeFileIndex <= 0"
                :class="{ 'opacity-50 cursor-not-allowed': activeFileIndex <= 0 }"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                上一张
              </button>
              
              <button 
                type="button"
                @click="nextImage" 
                class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                :disabled="activeFileIndex >= selectedFiles.length - 1"
                :class="{ 'opacity-50 cursor-not-allowed': activeFileIndex >= selectedFiles.length - 1 }"
              >
                下一张
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button 
                type="button" 
                @click="uploadFiles"
                class="inline-flex items-center px-5 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                :disabled="isUploading"
                :class="{ 'opacity-75 cursor-wait': isUploading }"
              >
                <svg v-if="isUploading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isUploading ? '上传中...' : '上传图片' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { message } from '../../../plugins/message';
import router from '../../../router';
import myAxios from '../../../request';
import {formatSize} from "@/utils";
import {PictureUploadRequest, pictureUploadRequestByPost} from "@/api/picture-service";
import CustomSelect from '@/components/CustomSelect.vue';

// 上传状态
const isDragging = ref(false);
const isUploading = ref(false);
const activeFileIndex = ref(0);
const uploadProgress = ref(0);


interface SelectedFile {
  file: File;
  name: string;
  size: number;
  preview: string;
  info: PictureUploadRequest;
}

const selectedFiles = ref<SelectedFile[]>([]);
const newTags = ref<string[]>([]);

// 当前选中的文件
const activeFile = computed(() => {
  if (selectedFiles.value.length === 0) return null;
  return selectedFiles.value[activeFileIndex.value];
});

// 切换到上一张图片
const prevImage = () => {
  if (activeFileIndex.value > 0) {
    activeFileIndex.value--;
  }
};

// 切换到下一张图片
const nextImage = () => {
  if (activeFileIndex.value < selectedFiles.value.length - 1) {
    activeFileIndex.value++;
  }
};

// 格式化文件大小
const formatFileSize = (size: number): string => {
  return formatSize(size)
};

// 在 script setup 部分添加常量
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes

// 处理文件拖放
const onDrop = (e: DragEvent) => {
  isDragging.value = false;
  
  if (e.dataTransfer && e.dataTransfer.files) {
    handleFiles(e.dataTransfer.files);
  }
};

// 处理文件选择
const onFileSelected = (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (input.files) {
    handleFiles(input.files);
  }
};

// 处理文件添加
const handleFiles = (files: FileList) => {
  const newFiles = Array.from(files).filter(file => {
    // 只接受图片文件
    return file.type.startsWith('image/');
  });

  // 获取当前文件数量
  const currentCount = selectedFiles.value.length;

  // 添加文件到列表
  for (const file of newFiles) {
    // 检查文件大小
    if (file.size > MAX_FILE_SIZE) {
      message.error(`图片 ${file.name} 超过 3MB 限制`, '');
      continue;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        selectedFiles.value.push({
          file,
          name: file.name,
          size: file.size,
          preview: e.target.result as string,
          info: {
            picName: file.name.split('.')[0],
            tags: [],
            category: '',
            introduction: ''
          }
        });
        newTags.value.push('');
        
        if (currentCount === 0 && selectedFiles.value.length > 0) {
          activeFileIndex.value = 0;
        }
      }
    };
    reader.readAsDataURL(file);
  }
};

// 添加标签
const addTag = (fileIndex: number) => {
  const tag = newTags.value[fileIndex]?.trim() || "";
  if (tag && selectedFiles.value[fileIndex]?.info?.tags && !selectedFiles.value[fileIndex].info.tags.includes(tag)) {
    selectedFiles.value[fileIndex].info.tags.push(tag);
    newTags.value[fileIndex] = '';
  }
};

// 移除标签
const removeTag = (fileIndex: number, tagIndex: number) => {
  if (selectedFiles.value[fileIndex]?.info?.tags) {
    selectedFiles.value[fileIndex].info.tags.splice(tagIndex, 1);
  }
};

// 移除文件
const removeFile = (index: number) => {
  selectedFiles.value.splice(index, 1);
  newTags.value.splice(index, 1);
  
  // 调整当前活动索引
  if (selectedFiles.value.length === 0) {
    activeFileIndex.value = 0;
  } else if (activeFileIndex.value >= selectedFiles.value.length) {
    activeFileIndex.value = selectedFiles.value.length - 1;
  }
};

// 上传文件
const uploadFiles = async () => {
  if (selectedFiles.value.length === 0) {
    message.warning('请先选择要上传的图片', '');
    return;
  }

  isUploading.value = true;
  uploadProgress.value = 0;
  
  try {
    const totalFiles = selectedFiles.value.length;
    let completedFiles = 0;
    
    for (const selected of selectedFiles.value) {
      // 确保 tags 是一个一维字符串数组
      const tagsToSend: string[] = selected.info.tags || [];
      
      // (可选) 添加日志来验证数据结构
      // console.log(`Uploading tags for ${selected.name}:`, JSON.stringify(tagsToSend));

      // 使用 pictureUploadRequestByPost 方法
      const response = await pictureUploadRequestByPost(
        selected.file, 
        {
          picName: selected.info.picName || selected.file.name.split('.')[0],
          category: selected.info.category || '',
          tags: tagsToSend, // 确保传递的是一维数组
          introduction: selected.info.introduction || ''
        }
      );

      // 检查上传结果
      const result = response as any;
      if (result.code !== 200) {
        throw new Error(result.message || '上传失败');
      }
      
      // 更新进度
      completedFiles++;
      uploadProgress.value = Math.floor((completedFiles / totalFiles) * 100);
    }

    // 全部上传成功
    message.success('所有图片上传成功！', '');
    setTimeout(() => {
      router.push('/picture'); // 上传成功后跳转
    }, 1500);
  } catch (error: any) {
    message.error('上传失败: ' + (error.message || '未知错误'), '');
  } finally {
    isUploading.value = false;
  }
};

// Prepare options for the Category CustomSelect
const categoryOptions = computed(() => {
  return [
    { value: '', label: '选择分类' },
    { value: '自然风景', label: '自然风景' },
    { value: '城市建筑', label: '城市建筑' },
    { value: '人物肖像', label: '人物肖像' },
    { value: '动物世界', label: '动物世界' },
    { value: '美食佳肴', label: '美食佳肴' },
    { value: '旅行探险', label: '旅行探险' },
    { value: '科技数码', label: '科技数码' },
    { value: '艺术创作', label: '艺术创作' },
  ];
});

// Prepare options for the Tag CustomSelect
const predefinedTags = [
  '风景', '建筑', '人像', '动物', '植物', '美食', '城市', '旅行', 
  '艺术', '科技', '摄影', '黑白', '夜景', '日落', '海边', '山川'
];
const tagOptions = computed(() => {
  const options: { value: string; label: string; disabled?: boolean }[] = [
    { value: '', label: '选择标签', disabled: true } // Placeholder is disabled
  ]; 
  
  // Add predefined tags (not disabled)
  predefinedTags.forEach(tag => {
    options.push({ value: tag, label: tag }); // No 'disabled' property needed here
  });
  return options;
});
</script>

<style scoped>
.picture-upload-page {
  font-family: 'Noto Sans SC', sans-serif;
}

@media (min-width: 768px) {
  .md\:w-16 {
    width: 4rem;
  }
}

/* 定制滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>