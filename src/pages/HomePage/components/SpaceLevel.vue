<template>
  <div class="space-level bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 标题区域 -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">选择您的方案</h2>
        <p class="mt-4 text-lg text-gray-600">为您的需求选择最合适的方案，随时升级或降级</p>
      </div>

      <!-- 价格卡片容器 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PriceCard
          title="普通版"
          description="适合个人用户使用"
          price="免费"
          :features="[
            '100张图片额度',
            '100MB空间',
            '10次智能扩图额度',
            '10次以图搜图额度'
          ]"
          action-text="开始使用"
          @action-click="handleAction('free')"
        />

        <PriceCard
          title="旗舰版"
          description="适合个人创作者"
          price="¥8.88"
          :features="[
            '1000张图片额度',
            '1G空间',
            '30次智能扩图额度',
            '30次以图搜图额度'
          ]"
          action-text="立即升级"
          :is-highlighted="true"
          :is-recommended="true"
          @action-click="handleAction('pro')"
        />

        <PriceCard
          title="企业版"
          description="适合企业团队使用"
          price="¥18.88"
          :features="[
            '10000张图片额度',
            '10G空间',
            '50次智能扩图额度',
            '50次以图搜图额度'
          ]"
          action-text="联系我们"
          @action-click="handleAction('enterprise')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PriceCard from './PriceCard.vue'

const handleAction = (plan: 'free' | 'pro' | 'enterprise') => {
  // 处理点击事件
  console.log('Selected plan:', plan)
}
</script>

<style scoped>
.space-level {
  position: relative;
  z-index: 1;
}

/* 价格卡片悬停效果 */
.hover\:scale-105 {
  transition: transform 0.3s ease;
}
</style>