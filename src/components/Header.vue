<template>
  <div class="header">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <svg class="h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span class="ml-2 text-xl font-semibold text-gray-900">{{ constant.information.chineseName }}</span>
            </div>
            <!--            -->
            <!--        active    border-indigo-500 text-gray-900-->
            <!--        非active    border-transparent   hover:border-gray-300 hover:text-gray-700 text-gray-500-->
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link
                  v-for="item in navigationItems"
                  :key="item.path"
                  :to="item.path"
                  :class="[
                   activeNavigation(item)
                     ? 'border-indigo-500 text-gray-900'
                     : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                   'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                 ]"
              >{{ item.name }}
              </router-link>
            </div>

          </div>
          <div class="flex items-center">
            <!-- 未登录状态显示登录注册按钮 -->
            <div v-if="!userStore.isLogin()">
              <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                      @click="gotoLoginPage">登录
              </button>
              <button class="bg-white hover:bg-gray-100 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium ml-2"
                      @click="gotoRegisterPage">注册
              </button>
            </div>

            <!-- 登录状态显示上传按钮和用户菜单 -->
            <template v-if="userStore.isLogin()">
              <!-- 用户菜单 -->
              <div class="ml-4 flex items-center">
                <div class="relative" ref="dropdownRef">
                  <button
                      type="button"
                      class="flex items-center gap-2 rounded-full hover:bg-gray-100 p-1.5 transition-colors duration-200"
                      @click="toggleDropdown"
                      aria-expanded="false"
                  >
                    <img
                        :src="userStore.getLoginUser()?.avatar || defaultAvatar"
                        alt="用户头像"
                        class="w-7 h-7 rounded-full object-cover"
                    />
                    <span class="text-sm font-medium text-gray-900">{{
                        userStore.getLoginUser()?.nickname || '未登录'
                      }}</span>
                    <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd"
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"/>
                      </svg>
                  </button>

                  <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0 translate-y-1"
                      enter-to-class="opacity-100 translate-y-0"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100 translate-y-0"
                      leave-to-class="opacity-0 translate-y-1"
                  >
                    <div v-show="isDropdownOpen"
                        class="absolute right-0 z-10 mt-1 w-52 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 text-sm">
                      <div class="p-2">
                        <!-- 用户信息 -->
                        <div class="group relative flex gap-x-3 rounded-md p-2 hover:bg-gray-50">
                          <div
                              class="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-gray-50 group-hover:bg-white">
                            <svg class="h-5 w-5 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                            </svg>
                          </div>
                          <div>
                            <router-link :to="`/user/${userStore.getLoginUser().id}`" class="font-medium text-gray-900">
                              我的信息
                              <span class="absolute inset-0"></span>
                            </router-link>
                            <p class="mt-0.5 text-xs text-gray-500">查看和编辑个人资料</p>
                          </div>
                        </div>

                        <!-- 我的消息 -->
                        <div class="group relative flex gap-x-3 rounded-md p-2 hover:bg-gray-50">
                          <div
                              class="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-gray-50 group-hover:bg-white">
                            <svg class="h-5 w-5 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                            </svg>
                          </div>
                          <div>
                            <a href="/messages" class="font-medium text-gray-900">
                              我的消息
                              <span class="absolute inset-0"></span>
                            </a>
                            <p class="mt-0.5 text-xs text-gray-500">查看系统通知和消息</p>
                          </div>
                        </div>
                      </div>

                      <!-- 分隔线 -->
                      <div class="border-t border-gray-200 my-1"></div>

                      <!-- 退出登录 -->
                      <div class="p-2">
                        <div class="group relative flex gap-x-3 rounded-md p-2 hover:bg-gray-50">
                          <div
                              class="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-gray-50 group-hover:bg-white">
                            <svg class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
                            </svg>
                          </div>
                          <button
                              @click="handleLogout"
                              class="flex-1 text-left"
                          >
                            <span class="font-medium text-red-500">退出登录</span>
                            <p class="mt-0.5 text-xs text-gray-500" >退出当前账号</p>
              </button>
            </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import {useUserStore} from '../stores/useUserStore'
import {useRoute, useRouter} from 'vue-router'
import defaultAvatar from '../assets/default-avatar.png'
import constant from "../../collab-vision"

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const isDropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

// 定义导航项
const navigationItems = [
  {
    path: '/',
    name: '首页'
  },
  {
    path: '/picture',
    name: '素材库'
  },
  {
    path: '/space',
    name: '空间'
  }
]

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// 处理点击外部关闭下拉框
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false
  }
}

const activeNavigation = (item: any) => {
  // 如果当前路径是'/'，只有首页导航项（路径也是'/'）会高亮
  if (route.path === '/') {
    return item.path === '/';
  }
  
  // 对于其他路径，检查当前路由是否以导航项的路径开头
  // 比如：当前路由为'/picture/detail/1'，会使'素材库'（路径为'/picture'）高亮
  if (item.path !== '/' && route.path.startsWith(item.path)) {
    return true;
  }
  
  return false;
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleLogout = () => {
  userStore.logout()
  isDropdownOpen.value = false
  router.push('/')
}

const gotoLoginPage = () => {
  router.push('/login')
}

const gotoRegisterPage = () => {
  router.push('/register')
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: white;
}

/* 添加过渡效果 */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>