<template>
  <div class="user-info-page min-h-screen bg-gray-50 pt-12">
    <div class="w-full max-w-2xl mx-auto px-0 flex flex-col items-center">
      <div class="flex flex-col items-center px-4">
        <div class="relative mb-4">
          <!-- 头像外圈装饰（VIP） -->
          <div class="absolute -inset-2 flex items-center justify-center z-10">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="56" fill="none" stroke="#6366f1" stroke-width="4" stroke-dasharray="8 6"/>
              <circle cx="60" cy="60" r="50" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-dasharray="2 4"/>
            </svg>
            <span v-if="user.isVip"
                  class="absolute top-0 right-1 bg-indigo-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">VIP</span>
          </div>
          <!-- 用户头像 -->
          <img :src="user.avatar" alt="头像"
               class="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover z-20 relative"/>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">{{ user.nickname }}</h2>
        <div class="flex items-center text-gray-500 mb-2">
          <svg class="w-5 h-5 mr-1 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-8 0v-1"/>
          </svg>
          <span>{{ user.email }}</span>
        </div>
        <p class="text-gray-600 text-center mb-6 max-w-xs">{{ user.bio || '这个人很神秘，什么都没有写~' }}</p>
        <button
            v-if="user.id===currentUser?.id"
            class="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-all">
          编辑资料
        </button>
      </div>
      <div class="mt-8 w-full flex justify-between text-center">
        <div class="flex-1">
          <div class="text-sm text-gray-400">图片数</div>
          <div class="text-xl font-bold text-gray-900">{{ user.pictureCount }}</div>
        </div>
        <div class="flex-1">
          <div class="text-sm text-gray-400">粉丝</div>
          <div class="text-xl font-bold text-gray-900">{{ user.fansCount }}</div>
        </div>
        <div class="flex-1">
          <div class="text-sm text-gray-400">关注</div>
          <div class="text-xl font-bold text-gray-900">{{ user.followCount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useUserStore} from "@/stores/useUserStore";
import {useRoute} from "vue-router";
import {getSearchUserInfoRequestByGet} from "@/api/user-service";
import router from "@/router";

const route = useRoute()
const currentUser = useUserStore().getLoginUser()

const user = ref({
  id:-1,
  avatar: '',
  nickname: '用户xx',
  email: 'collab_vision@163.com',
  bio: '这是一个神秘人',
  isVip: true,
  pictureCount: 12,
  fansCount: 34,
  followCount: 56
})

const getUserInfoDetail = async (id:string)=>{
  const res = await getSearchUserInfoRequestByGet(id)
  if (res.code != 200) {
    router.push({
      path:"/notFound"
    })
    return;
  }
  user.value.id = res.data.id
  user.value.avatar = res.data.avatar
  user.value.nickname = res.data.nickname
  user.value.email = res.data.email

}


onMounted(()=>{
  const id = route.params.id
  getUserInfoDetail(id)
})

</script>

<style scoped>
.user-info-page {
  min-height: 100vh;
}
</style> 