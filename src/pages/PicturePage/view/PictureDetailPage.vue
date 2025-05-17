<template>
  <div class="picture-detail-page mt-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 图片区域 -->
      <div class="bg-white shadow rounded-lg overflow-hidden mb-8 picture-area">
        <div class="relative image-container">
          <!-- 骨架屏 - 在图片加载前显示 -->
          <div v-if="loading" class="w-full h-full flex items-center justify-center bg-gray-100 animate-pulse">
            <div class="w-full h-full flex flex-col items-center justify-center">
              <div class="w-full h-full flex items-center justify-center">
                <svg class="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="w-3/4 h-4 bg-gray-300 rounded-md mt-4"></div>
              <div class="w-1/2 h-4 bg-gray-300 rounded-md mt-2"></div>
            </div>
          </div>
          
          <!-- 图片 -->
          <img v-else 
               :src="pictureDetail.compressUrl??pictureDetail.url"
               alt="城市建筑"
               class="w-full h-auto object-cover"
               @load="imageLoaded">
        </div>

        <!-- 图片信息 -->
        <div class="p-6 border-b border-gray-200">
          <div class="flex flex-wrap items-center justify-between">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">{{ pictureDetail.category }}</h1>
              <p class="text-gray-600 mt-1">{{ pictureDetail.introduction ?? pictureDetail.category }}</p>
            </div>
            <div class="flex space-x-3 mt-4 sm:mt-0">
              <!-- 点赞按钮 (使用div替代button) -->
              <div
                  class="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors"
                  @click="toggleFavorite"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 transition-colors"
                    :class="pictureDetail.isFavorite ? 'text-red-500' : 'text-gray-500'"
                    :fill="pictureDetail.isFavorite ? 'currentColor' : 'none'"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>{{ pictureDetail.isFavorite ? '已点赞' : '点赞' }}</span>
              </div>

              <!-- 收藏按钮 (使用div替代button) -->
              <div
                  class="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors"
                  @click="toggleCollect"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 transition-colors"
                    :class="pictureDetail.isCollect ? 'text-indigo-500' : 'text-gray-500'"
                    :fill="pictureDetail.isCollect ? 'currentColor' : 'none'"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span>{{ pictureDetail.isCollect ? '已收藏' : '收藏' }}</span>
              </div>

              <!-- 下载按钮保持不变 -->
              <button @click="download"
                  class="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                下载
              </button>
            </div>
          </div>
        </div>

        <!-- 作者和统计信息 -->
        <div class="p-6 border-b border-gray-200 flex flex-wrap justify-between">
          <div class="flex items-center">
            <img class="h-10 w-10 rounded-full"
                 :src="pictureDetail.avatar??constant.default.avatar"
                 alt="用户头像">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-gray-900">{{ pictureDetail.author }}</h3>
              <a href="#" class="text-xs text-indigo-600 hover:text-indigo-500">查看所有作品</a>
            </div>
          </div>
          <div class="flex space-x-6 mt-4 sm:mt-0">
            <div class="flex flex-col items-center">
              <span class="text-gray-900 font-medium">{{ pictureDetail.viewCount }}</span>
              <span class="text-xs text-gray-500">浏览</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-gray-900 font-medium">{{ pictureDetail.favoriteCount }}</span>
              <span class="text-xs text-gray-500">点赞</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-gray-900 font-medium">{{ pictureDetail.downloadCount }}</span>
              <span class="text-xs text-gray-500">下载</span>
            </div>
            <div class="flex flex-col items-center">
              <span class="text-gray-900 font-medium">{{ pictureDetail.collectCount }}</span>
              <span class="text-xs text-gray-500">收藏</span>
            </div>
          </div>
        </div>

        <!-- 图片详细信息 -->
        <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">信息</h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-sm text-gray-500">文件大小</span>
                <span class="text-sm text-gray-900">{{ formatSize(pictureDetail.picSize) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-500">上传时间</span>
                <span class="text-sm text-gray-900">{{ formatTime(pictureDetail.uploadTime, "YYYY年MM月DD日") }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-500">分辨率</span>
                <span
                    class="text-sm text-gray-900">{{ `${pictureDetail.picWidth} x ${pictureDetail.picHeight} 像素` }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-500">主色调</span>
                <span class="text-sm text-gray-900">
                   <div v-if="pictureDetail.picColor"
                        class="mr-1"
                        :style="{
                               backgroundColor:toHexColor(pictureDetail.picColor),
                               width:'12px',
                               height:'12px',
                               display:'inline-block'}"></div>
                  {{ pictureDetail.picColor ?? '-' }}
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-gray-500">版权</span>
                <span class="text-sm text-gray-900">署名-非商业性使用</span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">标签</h3>
            <div class="flex flex-wrap gap-2">
              <a href="javascript:" v-for="tag in pictureDetail.tags "
                 class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                {{ tag }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 相关推荐 -->
      <div class="mb-8">
        <h2 class="text-xl font-medium text-gray-900 mb-4">相关素材</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <!-- 推荐图片 1 -->
          <a href="#" class="group">
            <div class="relative rounded-lg overflow-hidden">
              <img
                  src="@/assets/related-image-1.jpg"
                  alt="相关图片"
                  class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300">
              <div
                  class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 class="mt-2 text-sm font-medium text-gray-900 group-hover:text-indigo-600">现代商业大厦</h3>
          </a>

          <!-- 推荐图片 2 -->
          <a href="#" class="group">
            <div class="relative rounded-lg overflow-hidden">
              <img
                  src="@/assets/related-image-2.jpg"
                  alt="相关图片"
                  class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300">
              <div
                  class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 class="mt-2 text-sm font-medium text-gray-900 group-hover:text-indigo-600">城市住宅建筑</h3>
          </a>

          <!-- 推荐图片 3 -->
          <a href="#" class="group">
            <div class="relative rounded-lg overflow-hidden">
              <img
                  src="@/assets/related-image-3.jpg"
                  alt="相关图片"
                  class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300">
              <div
                  class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 class="mt-2 text-sm font-medium text-gray-900 group-hover:text-indigo-600">摩天大楼夜景</h3>
          </a>

          <!-- 推荐图片 4 -->
          <a href="#" class="group">
            <div class="relative rounded-lg overflow-hidden">
              <img
                  src="@/assets/related-image-4.jpg"
                  alt="相关图片"
                  class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300">
              <div
                  class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 class="mt-2 text-sm font-medium text-gray-900 group-hover:text-indigo-600">玻璃墙面建筑</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import {pictureDetailQueryRequestByGet, PictureDetailVo, doFavoritePictureRequestByPost, undoFavoritePictureRequestByPost, PictureFavoriteRequest} from "../../../api/picture-service";
import constant from "../../../../collab-vision";
import {downloadImage, formatSize, formatTime, toHexColor,} from "../../../utils";
import {message} from "../../../plugins/message";
import router from "../../../router";
import {ResponseResult} from "../../../request";

const route = useRoute()
const loading = ref(true);

const pictureDetail = ref<PictureDetailVo>({
  id: 0,
  url: "",
  compressUrl: "",
  category: "",
  introduction: "",
  tags: [],
  picSize: 0,
  picWidth: 0,
  picHeight: 0,
  picColor: "",
  uploadTime: new Date(),
  isFavorite: false,
  isCollect: false,
  favoriteCount: 0,
  viewCount: 0,
  collectCount: 0,
  downloadCount: 0,
  author: "",
  authorId: 0,
  avatar: ""
})

/**
 * 切换点赞状态
 * 该函数在用户点击点赞按钮时触发，会切换点赞状态
 */
const toggleFavorite = async () => {
  try {
    const request: PictureFavoriteRequest = {
      id: pictureDetail.value.id
    }
    
    if (pictureDetail.value.isFavorite) {
      // 已点赞状态，调用取消点赞接口
      const res = await undoFavoritePictureRequestByPost(request)
      // 由于API响应已经在axios拦截器中被处理，我们直接获取返回的数据
      const response = res as any
      if (response && response.code === 200) {
        pictureDetail.value.isFavorite = false
        if (pictureDetail.value.favoriteCount > 0) {
          pictureDetail.value.favoriteCount--
        }
        message.success('已取消点赞', '')
      } else {
        message.error('操作失败', response && response.message ? response.message : '请稍后重试')
      }
    } else {
      // 未点赞状态，调用点赞接口
      const res = await doFavoritePictureRequestByPost(request)
      // 由于API响应已经在axios拦截器中被处理，我们直接获取返回的数据
      const response = res as any
      if (response && response.code === 200) {
        pictureDetail.value.isFavorite = true
        pictureDetail.value.favoriteCount++
        message.success('点赞成功', '')
      } else {
        message.error('操作失败', response && response.message ? response.message : '请稍后重试')
      }
    }
  } catch (error) {
    console.error('点赞操作失败:', error)
    message.error('操作失败', '请稍后重试')
  }
};

/**
 * 切换收藏状态
 * 该函数在用户点击收藏按钮时触发，会切换收藏状态
 * 在实际应用中，这里应该发送API请求到服务器更新收藏状态
 */
const toggleCollect = () => {
  pictureDetail.value.isCollect = !pictureDetail.value.isCollect;
  // 实际开发中应该在这里调用API
  // 例如: await api.toggleCollect(pictureId, pictureDetail.isFavorite.value);
  console.log('收藏状态:', pictureDetail.value.isCollect ? '已收藏' : '取消收藏');
};

const download = ()=>{
  downloadImage(pictureDetail.value.compressUrl)
  message.success("下载成功", "")
}

// 图片加载完成处理函数
const imageLoaded = () => {
  loading.value = false;
};

const getPictureDetail = async (id: string) => {
  loading.value = true;
  try {
    const res = await pictureDetailQueryRequestByGet(id)
    if (res.code != 200) {
      router.push({
        path:"/notFound"
      })
      return;
    }
    
    pictureDetail.value = {
      ...res.data
    }
    
    // 如果图片已经在缓存中，可能不会触发@load事件，所以这里预加载一个图片来处理这种情况
    const img = new Image();
    img.onload = () => {
      loading.value = false;
    };
    img.onerror = () => {
      loading.value = false; // 即使加载失败也要移除骨架屏
    };
    img.src = pictureDetail.value.compressUrl || pictureDetail.value.url;
  } catch (error) {
    loading.value = false;
    router.push({
      path:"/notFound"
    });
  }
}

onMounted(async () => {
  // 获取图片ID
  const id = route.params.id
  getPictureDetail(id)
})

</script>

<style scoped>
.picture-detail-page {
  padding-top: 1rem;
}

.image-container {
  width: 100%;
  height: 100vh;
  max-height: calc(100vh - 80px);
  background-color: #000;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 骨架屏动画 */
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
</style>