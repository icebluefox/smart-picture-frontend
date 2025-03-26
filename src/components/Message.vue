<template>
  <div class="message-container">
    <TransitionGroup 
      name="message-fade" 
      tag="div" 
      class="message-list"
    >
      <div 
        v-for="msg in messages" 
        :key="msg.id" 
        class="message-item"
      >
        <div class="message-icon" :class="`message-icon-${msg.type}`">
          <svg v-if="msg.type === 'info'" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else-if="msg.type === 'success'" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else-if="msg.type === 'warning'" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.29 3.86L1.82 18C1.64537 18.3024 1.55296 18.6453 1.55199 18.9945C1.55101 19.3437 1.64149 19.6871 1.81442 19.9905C1.98736 20.2939 2.23673 20.5467 2.53771 20.7239C2.83869 20.901 3.18074 20.9962 3.53 21H20.47C20.8192 20.9962 21.1613 20.901 21.4623 20.7239C21.7633 20.5467 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3437 2.89725 12 2.89725C11.6563 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 9V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else-if="msg.type === 'error'" class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 9L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="message-content">
          <div class="message-title" :class="`message-title-${msg.type}`">{{ msg.title }}</div>
          <div class="message-description">{{ msg.description }}</div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue';

export interface MessageOptions {
  title: string;
  description: string;
  type: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
}

interface MessageItem extends MessageOptions {
  id: number;
}

const messages = ref<MessageItem[]>([]);
let messageId = 0;

// 添加消息
const add = (options: MessageOptions) => {
  const id = messageId++;
  const message: MessageItem = {
    id,
    title: options.title,
    description: options.description,
    type: options.type,
    duration: options.duration || 3000
  };
  
  messages.value.push(message);
  
  // 设置自动移除
  setTimeout(() => {
    remove(id);
  }, message.duration);
  
  return id;
};

// 移除消息
const remove = (id: number) => {
  const index = messages.value.findIndex(msg => msg.id === id);
  if (index !== -1) {
    messages.value.splice(index, 1);
  }
};

// 创建各种类型的消息方法
const info = (title: string, description: string, duration?: number) => 
  add({ title, description, type: 'info', duration });

const success = (title: string, description: string, duration?: number) => 
  add({ title, description, type: 'success', duration });

const warning = (title: string, description: string, duration?: number) => 
  add({ title, description, type: 'warning', duration });

const error = (title: string, description: string, duration?: number) => 
  add({ title, description, type: 'error', duration });

// 导出方法供全局使用
defineExpose({
  info,
  success,
  warning,
  error
});
</script>

<style scoped>
.message-container {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  pointer-events: none;
  z-index: 9999;
}

.message-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.message-item {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  margin-bottom: 12px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  pointer-events: auto;
  max-width: 400px;
  width: calc(100% - 32px);
  transition: all 0.3s;
}

.message-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.message-icon .icon {
  width: 20px;
  height: 20px;
}

.message-icon-info {
  background-color: #E6F4FF;
  color: #1677FF;
}

.message-icon-success {
  background-color: #F6FFED;
  color: #52C41A;
}

.message-icon-warning {
  background-color: #FFFBE6;
  color: #FAAD14;
}

.message-icon-error {
  background-color: #FFF2F0;
  color: #FF4D4F;
}

.message-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.message-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 2px;
  line-height: 1.3;
}

.message-title-info {
  color: #1677FF;
}

.message-title-success {
  color: #52C41A;
}

.message-title-warning {
  color: #FAAD14;
}

.message-title-error {
  color: #FF4D4F;
}

.message-description {
  font-size: 12px;
  color: #747778;
  line-height: 1.3;
}

/* 动画效果 */
.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.message-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.message-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>