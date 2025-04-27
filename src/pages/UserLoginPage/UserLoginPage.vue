<template>
  <div class="user-login-page h-screen w-full overflow-hidden bg-indigo-900 relative">
    <!-- 左侧背景区域 -->
    <div class="absolute inset-0 w-full h-full">
      <img
          src="@/assets/login-background.jpg"
          alt="创意协作背景"
          class="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-indigo-900/20 backdrop-blur-[2px]"></div>
    </div>

    <!-- 内容容器 -->
    <div class="absolute inset-0 w-full h-full flex items-center justify-center lg:justify-end px-5 lg:px-16">
      <!-- 登录表单卡片 -->
      <div class="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6">
        <!-- 头部品牌标识 -->
        <div class="flex items-center mb-6">
          <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
            <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="ml-3">
            <h2 class="text-xl font-bold text-gray-800">欢迎回到协创视界</h2>
            <div class="text-sm text-gray-500">所见即所创，协创即共赢</div>
          </div>
        </div>

        <!-- 登录表单 -->
        <form class="space-y-4">
          <!-- 用户名或邮箱 -->
          <div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"/>
                </svg>
              </div>
              <input
                  type="text"
                  id="username"
                  name="username"
                  v-model="loginFormData.username"
                  placeholder="请输入账号"
                  class="block w-full pl-10 py-2.5 border border-gray-200 rounded-lg focus:ring-0 focus:border-indigo-600 transition-colors bg-white/80"
              />
            </div>
          </div>

          <!-- 密码 -->
          <div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor">
                  <path fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"/>
                </svg>
              </div>
              <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  name="password"
                  v-model="loginFormData.password"
                  placeholder="请输入密码"
                  class="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg focus:ring-0 focus:border-indigo-600 transition-colors bg-white/80"
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg @click="togglePassword"
                     class="h-5 w-5 text-gray-400 hover:text-indigo-600 cursor-pointer transition-colors"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path v-if="showPassword" d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path v-if="showPassword" fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"/>
                  <path v-if="!showPassword" fill-rule="evenodd"
                        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                        clip-rule="evenodd"/>
                  <path v-if="!showPassword"
                        d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- 记住我和忘记密码 -->
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox"
                     class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
              <label for="remember-me" class="ml-2 text-sm text-gray-600">记住我</label>
            </div>
            <a href="#" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">忘记密码?</a>
          </div>

          <!-- 登录按钮 -->
          <button @click="doLogin" type="button"
                  class="w-full py-2.5 px-4 border border-transparent rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <span v-if="!loading">登录账号</span>
            <span class="loader16" v-else>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <!-- 其他登录方式 -->
          <div class="pt-3 flex justify-between items-center border-t border-gray-200 mt-3">
            <div class="text-sm text-gray-600">还没有账号？<a href="/register"
                                                             class="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">立即注册</a>
            </div>
            <div class="flex space-x-3">
              <div class="text-center">
                <div
                    class="w-9 h-9 mx-auto bg-gray-50 rounded-lg flex items-center justify-center cursor-pointer hover:bg-indigo-50 transition-colors border border-gray-200">
                  <svg t="1741612910522" class="h-5 w-5 text-indigo-600" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="3162" width="200" height="200">
                    <path
                        d="M686.6 372.5c4.5 0 9 0.1 13.4 0.3C676.5 246.1 544.2 149 384.5 149 208.2 149 65.3 267.3 65.3 413.2c0 85.6 49.1 161.6 125.3 209.9 1 0.6 2.9 1.8 2.9 1.8l-30.9 95.6L278 662.3l5.4 1.5c31.7 8.7 65.7 13.5 101 13.5 7.2 0 14.3-0.3 21.4-0.6-6.5-20.1-10.1-41.2-10.1-63 0.1-133.2 130.4-241.2 290.9-241.2z m-191-93.2c24.8 0 44.8 19.2 44.8 43 0 23.7-20 43-44.8 43s-44.8-19.3-44.8-43c0-23.8 20-43 44.8-43z m-222.2 85.9c-24.7 0-44.8-19.3-44.8-43s20.1-43 44.8-43c24.8 0 44.9 19.2 44.9 43 0 23.7-20.1 43-44.9 43z m685.3 250.1c0-123.3-120.7-223.2-269.6-223.2-149 0-269.7 99.9-269.7 223.2 0 123.3 120.8 223.2 269.7 223.2 29.8 0 58.5-4 85.3-11.4 1.5-0.4 4.6-1.3 4.6-1.3l97.4 49.2-26-80.8s1.7-1 2.5-1.5c64.3-40.8 105.8-105.1 105.8-177.4z m-363.5-40.6c-20.9 0-37.9-16.3-37.9-36.3 0-20 16.9-36.2 37.9-36.2 20.9 0 37.9 16.2 37.9 36.2 0 20.1-17 36.3-37.9 36.3z m187.6 0c-20.9 0-37.8-16.3-37.8-36.3 0-20 16.9-36.2 37.8-36.2 21 0 37.9 16.2 37.9 36.2 0 20.1-16.9 36.3-37.9 36.3z"
                        fill="#4F39F6" p-id="3163"></path>
                  </svg>
                </div>
                <div class="text-xs text-gray-500 mt-1">微信登录</div>
              </div>
              <div class="text-center">
                <div
                    class="w-9 h-9 mx-auto bg-gray-50 rounded-lg flex items-center justify-center cursor-pointer hover:bg-indigo-50 transition-colors border border-gray-200">
                  <svg class="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 18H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="text-xs text-gray-500 mt-1">扫码登录</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {UserLoginRequest, userLoginRequestByPost} from "../../api/user-service";
import {useRouter, useRoute} from "vue-router";
import {useUserStore} from "../../stores/useUserStore";
import {message} from "../../plugins/message";

// 变量
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const loading = ref(false)
const loginFormData = ref<UserLoginRequest>({
  username: "",
  password: ""
})
const showPassword = ref(false);

onMounted(() => {
  // 如果已登录，重定向到首页或来源页面
  if (userStore.isLogin()) {
    const redirectPath = route.query.redirect as string;
    router.replace(redirectPath || '/');
  }
})

// 方法
/**
 * 表单数据还原
 */
const clearLoginFormData = () => {
  loginFormData.value.username = ''
  loginFormData.value.password = ''
}

/**
 * 切换密码框状态
 */
const togglePassword = () => {
  showPassword.value = !showPassword.value;
}

/**
 * 登录事件处理
 */
const doLogin = async () => {
  // 已点击状态 禁用button
  if (loading.value) {
    return
  }

  if (loginFormData.value.username === '' || loginFormData.value.username.length > 8) {
    return
  }

  if (loginFormData.value.password === '' || loginFormData.value.password.length > 16) {
    return
  }

  loading.value = true
  const res = await userLoginRequestByPost(loginFormData.value)
  if (res.code != 200) {
    // 登录失败
    message.error(res.message, res.description)
    clearLoginFormData()
  } else {
    // 登录成功
    userStore.setLoginUser(res.data)
    
    // 检查是否有重定向参数，有则跳转到该页面，否则跳转到首页
    const redirectPath = route.query.redirect as string;
    router.replace(redirectPath || '/');
  }

  loading.value = false
}


</script>

<style scoped>
.user-login-page {
  margin: 0;
  padding: 0;
}

/* 确保图片完全填充容器，没有空白 */
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* 自定义输入框聚焦样式 */
input:focus {
  outline: none;
  border-color: #818CF8;
  box-shadow: 0 0 0 1px rgba(129, 140, 248, 0.6);
}

/* 自定义复选框和单选框聚焦样式 */
input[type="checkbox"]:focus, input[type="radio"]:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(129, 140, 248, 0.2);
}

.loader16 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.loader16 span {
  height: 5px;
  width: 5px;
  margin: 4px;
  border-radius: 2px;
  background-color: white;
  animation: loader16-animation 1.5s infinite ease-in-out;
}

.loader16 span:last-child {
  margin-right: 0;
}

.loader16 span:nth-child(1) {
  animation-delay: -0.3s;
}

.loader16 span:nth-child(2) {
  animation-delay: -0.1s;
}

.loader16 span:nth-child(3) {
  animation-delay: 0.1s;
}

@keyframes loader16-animation {
  0% {
    transform: scale(0.5);
    background-color: #f7f7f7;
    box-shadow: 0 0 0 0 rgba(247, 247, 247, 0.7);
  }

  50% {
    transform: scale(1.2);
    background-color: #ffffff;
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.5);
    background-color: #f7f7f7;
    box-shadow: 0 0 0 0 rgba(247, 247, 247, 0.7);
  }
}
</style>