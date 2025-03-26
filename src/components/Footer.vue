<template>
  <div class="footer">
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">图库共享</h3>
            <p class="text-gray-400">{{constant.footer.slogan}}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">快速链接</h3>
            <ul class="space-y-2">
              <li><a href="index.html" class="text-gray-400 hover:text-white">首页</a></li>
              <li><a href="explore.html" class="text-gray-400 hover:text-white">探索</a></li>
              <li><a href="workspace.html" class="text-gray-400 hover:text-white">工作空间</a></li>
              <li><a href="community.html" class="text-gray-400 hover:text-white">社区</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">关于我们</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white">公司简介</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">联系我们</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">加入我们</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white">帮助中心</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">关注我们</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-weixin fa-lg"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-weibo fa-lg"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-github fa-lg"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin fa-lg"></i></a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400">{{constant.footer.copyright}}</p>
          <div class="flex mt-4 md:mt-0 space-x-6">
            <a href="#" class="text-gray-400 hover:text-white">隐私政策</a>
            <a href="#" class="text-gray-400 hover:text-white">使用条款</a>
            <a href="#" class="text-gray-400 hover:text-white">Cookie 政策</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>

import constant from "../../collab-vision.ts";
</script>

<style scoped>

</style>