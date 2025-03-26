<template>
  <div class="message-demo p-6">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">消息通知示例</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold mb-4 text-gray-700">基础用法</h2>
        <div class="space-y-3">
          <button @click="showInfo" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            信息提示
          </button>
          <button @click="showSuccess" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            成功提示
          </button>
          <button @click="showWarning" class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors">
            警告提示
          </button>
          <button @click="showError" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
            错误提示
          </button>
        </div>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-lg font-semibold mb-4 text-gray-700">自定义持续时间</h2>
        <div class="space-y-3">
          <button @click="showLongMessage" class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors">
            显示5秒
          </button>
          <button @click="showShortMessage" class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
            显示1秒
          </button>
        </div>
      </div>
    </div>
    
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold mb-4 text-gray-700">使用方法</h2>
      <div class="bg-gray-100 p-4 rounded-lg">
        <pre class="text-sm text-gray-800">
// 方法一：直接导入并使用（推荐）
import { message } from '../plugins/message';

// 基础用法
message.info('消息标题', '这是一条普通信息');
message.success('操作成功', '数据已成功保存');
message.warning('注意', '请确认后再操作');
message.error('操作失败', '请检查网络连接');

// 自定义显示时间（毫秒）
message.info('长时间消息', '这条消息会显示5秒钟', 5000);
message.success('短时间消息', '这条消息会显示1秒钟', 1000);

// 方法二：使用全局方法（在浏览器环境中）
window.$message.info('消息标题', '这是一条信息');
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { message } from '../plugins/message';

// 基础用法
const showInfo = () => {
  message.info('系统提示', '这是一条普通信息通知');
};

const showSuccess = () => {
  message.success('上传成功', '文件已上传至云端存储');
};

const showWarning = () => {
  message.warning('注意事项', '您即将删除此项目，删除后不可恢复');
};

const showError = () => {
  message.error('上传失败', '服务器连接超时，请重试');
};

// 自定义持续时间
const showLongMessage = () => {
  message.info('系统公告', '这是一条重要通知，将显示5秒钟', 5000);
};

const showShortMessage = () => {
  message.success('快速提示', '这条消息会很快消失', 1000);
};
</script>

<style scoped>
.message-demo button {
  margin-right: 8px;
  margin-bottom: 8px;
}

.space-y-3 {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>