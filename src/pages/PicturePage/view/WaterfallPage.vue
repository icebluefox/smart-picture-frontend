<template>
  <div class="picture-page min-h-screen bg-gray-50">
    <!-- 搜索区域 -->
    <div class="search-section relative bg-cover bg-center flex items-center justify-center"
         style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg'); height: 60vh; background-position: center;">
      <div class="max-w-5xl w-full mx-auto px-4 py-8 z-10">
        <h1 class="text-4xl font-bold text-white text-center mb-6 drop-shadow-lg animate-fade-in">
          发现精彩图片
        </h1>

        <!-- 搜索框区域 -->
        <div class="bg-white/10 backdrop-blur-md rounded-lg shadow-xl max-w-3xl mx-auto overflow-hidden p-4">
          <div class="flex gap-2">
            <!-- 分类下拉框 -->
            <div class="w-1/3">
              <select
                  v-model="selectedCategory"
                  class="w-full h-12 rounded-md text-lg border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 px-4 bg-white text-gray-700"
              >
                <option value="">所有分类</option>
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>

            <!-- 多标签搜索框 -->
            <div class="relative w-2/3">
              <div
                  class="w-full min-h-12 px-2 py-1 rounded-md text-lg border-0 shadow-md focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow bg-white flex items-center">
                <!-- 标签和输入框容器 -->
                <div class="flex-1 flex flex-wrap items-center gap-2 pr-10 overflow-hidden">
                  <!-- 已选择的标签 -->
                  <span
                      v-for="(tag, index) in selectedTags"
                      :key="index"
                      class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-2 py-1 rounded-md flex items-center text-sm shadow-sm"
                  >
                    {{ tag }}
                    <button class="ml-1 text-white hover:text-gray-200 transition-colors" @click="removeTag(index)">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"/>
                      </svg>
                    </button>
                  </span>

                  <!-- 标签数量提示 -->
                  <span v-if="selectedTags.length >= maxTagCount" class="text-xs text-red-500 animate-pulse">
                    上限
                  </span>

                  <!-- 输入框 -->
                  <input
                      v-model="searchQuery"
                      type="text"
                      class="flex-1 min-w-[50px] outline-none text-gray-700"
                      placeholder="搜索图片..."
                      @keyup.enter="handleSearch"
                  >
                </div>

                <!-- 搜索按钮 - 固定在右侧 -->
                <button
                    class="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white p-2 rounded-md shadow-sm transition-colors absolute right-2 top-1/2 -translate-y-1/2"
                    @click="handleSearch"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 热门标签 -->
        <div class="mt-6 text-center">
          <p class="text-white/80 text-sm mb-2">热门标签</p>
          <div class="flex flex-wrap justify-center gap-3">
            <button
                v-for="tag in tags"
                :key="tag"
                class="px-4 py-2 rounded-md border border-white/40 text-white hover:bg-white/20 transition-all duration-200"
                :class="{'opacity-50 cursor-not-allowed': selectedTags.length >= maxTagCount && !selectedTags.includes(tag)}"
                @click="handleTagClick(tag)"
                :disabled="selectedTags.length >= maxTagCount && !selectedTags.includes(tag)"
            >
              {{ tag }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 图片瀑布流区域 -->
    <div class="max-w-[2000px] mx-auto px-2 py-8">
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
      </div>

      <div v-else class="masonry-grid">
        <MasonryColumn
            v-for="columnIndex in columnCount"
            :key="columnIndex"
            :images="images"
            :column-index="columnIndex - 1"
            :column-count="columnCount"
            @toggle-favorite="toggleFavorite"
            @share="handleShare"
            @download="handleDownload"
            @image-click="handleImageClick"
            @load-more="handleLoadMore"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, watch} from 'vue'
import MasonryColumn from '../components/MasonryColumn.vue'
import {PicturePagePictureVo, picturePageQueryRequestByPost, WaterfallQueryRequest} from "../../../api/picture-service";
import {message} from "../../../plugins/message";
import {downloadImage} from "../../../utils";
import {useRouter} from "vue-router";

const router = useRouter()

// ===== 状态管理 =====
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedTags = ref<string[]>([])
const images = ref<PicturePagePictureVo[]>([])
const loading = ref(false)
const hasMore = ref(true)
const columnCount = 3
const maxTagCount = 4
const loadedImageIds = new Set<number>() // 用于追踪已加载的图片ID

const categories = ['自然风光', '城市建筑', '人物肖像', '动物世界', '美食佳肴', '旅行探险', '科技数码', '艺术设计', '体育运动']
const tags = ['风景', '人像', '建筑', '旅行', '美食', '动物', '植物', '城市', '黑白', '夜景', '山水', '海洋', '街头', '创意', '复古']
// 搜索条件构建
const searchParam = ref<WaterfallQueryRequest>({
  searchText: searchQuery.value,
  tags: selectedTags.value,
  category: selectedCategory.value,
  pageNum: 1,
  pageSize: 12, // 减少每页加载数量
  sort: "descend",
  sortField: "create_time"
})

// 重置搜索参数
const resetSearchParam = () => {
  searchParam.value = {
    ...searchParam.value,
    searchText: searchQuery.value,
    tags: selectedTags.value,
    category: selectedCategory.value,
    pageNum: 1
  }
  loadedImageIds.clear() // 清除已加载的图片ID记录
  hasMore.value = true
}

// ===== 事件处理方法 =====
const handleSearch = async () => {
  loading.value = true
  resetSearchParam() // 重置搜索参数
  await mockLoadImages()
  loading.value = false
}

const handleTagClick = (tag: string) => {
  if (selectedTags.value.length >= maxTagCount && !selectedTags.value.includes(tag)) {
    message.warning('最多只能选择4个标签', '请先删除一些标签再添加新标签')
    return
  }

  if (!selectedTags.value.includes(tag)) {
    selectedTags.value.push(tag)
  }
  searchQuery.value = ''
}

const removeTag = (index: number) => {
  selectedTags.value.splice(index, 1)
}

const handleImageClick = (image: PicturePagePictureVo) => {
  router.push({
    path:`/picture/detail/${image.id}`
  })
}

const handleLoadMore = async () => {
  if (loading.value || !hasMore.value) return
  loading.value = true
  await mockLoadImages()
  loading.value = false
}

const mockLoadImages = async () => {
  try {
    const res = await picturePageQueryRequestByPost(searchParam.value)
    if (res.code !== 200) {
      message.error(res.message, res.description)
      return
    }

    // 过滤掉重复的图片
    const newImages = res.data.data.filter(img => !loadedImageIds.has(img.id))

    // 更新已加载图片ID集合
    newImages.forEach(img => loadedImageIds.add(img.id))

    if (searchParam.value.pageNum === 1) {
      images.value = newImages
    } else {
      images.value = [...images.value, ...newImages]
    }

    // 更新分页信息
    if (typeof searchParam.value.pageNum === 'number') {
      searchParam.value.pageNum++
    }
    hasMore.value = searchParam.value.pageNum < res.data.pages
  } catch (error) {
    console.error('加载图片失败:', error)
    message.error('加载失败', '请稍后重试')
  } finally {
    loading.value = false
  }
}

// 监听搜索条件变化
watch([searchQuery, selectedCategory, selectedTags], () => {
  resetSearchParam()
}, {deep: true})

const toggleFavorite = (image: PicturePagePictureVo) => {
  image.isFavorite = !image.isFavorite
}

const handleShare = (image: PicturePagePictureVo) => {
  console.log('分享图片:', image)
}

const handleDownload = (image: PicturePagePictureVo) => {
  downloadImage(image.compressUrl)
  message.success("下载成功", "")
}

onMounted(async () => {
  await mockLoadImages()
})
</script>

<style scoped>
/* 瀑布流网格布局 */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
}

@media (max-width: 1024px) {
  .masonry-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 640px) {
  .masonry-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.search-section {
  position: relative;
  overflow: hidden;
}

.search-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
  z-index: 1;
}
</style>