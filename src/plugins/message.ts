import type { App } from 'vue';
import { createApp } from 'vue';
import Message from '../components/Message.vue';

// 消息类型定义
export interface MessageOptions {
  title: string;
  description: string;
  type: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
}

// 创建消息实例
let messageInstance: any = null;

// 创建消息组件实例
const createMessage = () => {
  // 创建一个挂载容器
  const messageContainer = document.createElement('div');
  messageContainer.className = 'message-container-root';
  document.body.appendChild(messageContainer);

  // 创建消息组件实例
  const messageApp = createApp(Message);
  const instance = messageApp.mount(messageContainer);
  
  return instance;
};

// 获取消息实例
const getInstance = () => {
  if (!messageInstance) {
    messageInstance = createMessage();
  }
  return messageInstance;
};

// 消息方法
export const message = {
  // 信息提示
  info(title: string, description: string, duration?: number) {
    const instance = getInstance();
    return instance.info(title, description, duration);
  },
  
  // 成功提示
  success(title: string, description: string, duration?: number) {
    const instance = getInstance();
    return instance.success(title, description, duration);
  },
  
  // 警告提示
  warning(title: string, description: string, duration?: number) {
    const instance = getInstance();
    return instance.warning(title, description, duration);
  },
  
  // 错误提示
  error(title: string, description: string, duration?: number) {
    const instance = getInstance();
    return instance.error(title, description, duration);
  }
};

// 插件安装方法
export default {
  install(app: App) {
    // 注册组件
    app.component('Message', Message);
    
    // 创建消息实例
    messageInstance = getInstance();
    
    // 添加到全局属性
    app.config.globalProperties.$message = message;
    
    // 添加到全局
    window.$message = message;
  }
};

// 声明全局属性类型
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof message;
  }
}

declare global {
  interface Window {
    $message: typeof message;
  }
}