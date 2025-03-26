<template>
  <!-- 功能特点 -->
  <div class="advantage bg-gray-50 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">协创视界的核心优势</h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          让创意无限延展，让协作无缝衔接
        </p>
      </div>

      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AdvantageItem 
            v-for="(item, index) in advantageItems" 
            :key="index"
            :title="item.title"
            :description="item.description"
            :icon-path="item.iconPath"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdvantageItem from './AdvantageItem.vue';

// 定义所有优势项数据
const advantageItems = [
  {
    title: "AI智能识别",
    description: "基于深度学习的图像理解技术，自动标记内容要素，支持文字描述搜索和相似图像查找，轻松定位所需创意素材。",
    iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  },
  {
    title: "实时多人协作",
    description: "团队成员可同时在线编辑、评论和管理素材，实时查看变更，精确的权限控制和版本管理让协作更加流畅高效。",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    title: "云端智能处理",
    description: "一键实现图像优化、风格化处理和批量编辑，内置专业级调色和修饰工具，所有处理实时云端同步且不影响原始素材。",
    iconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    title: "安全与隐私保障",
    description: "企业级数据加密和访问控制，自定义水印和版权保护功能，支持多级备份和恢复，全方位保障您的创意资产安全。",
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  },
  {
    title: "高效工作流集成",
    description: "无缝对接主流设计软件和项目管理工具，支持自定义审批流程和自动化触发器，助力团队构建高效的端到端创意工作流。",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    title: "创意灵感激发",
    description: "内置海量创意参考库和设计趋势分析，AI辅助创意联想和风格推荐，从素材管理到创意孵化，一站式满足全流程设计需求。",
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  }
];
</script>

<style scoped>
.advantage {
  position: relative;
  z-index: 1;
}
</style>