import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // 打包时忽略类型错误
    minify: 'esbuild',
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: false,
    // esbuild 配置
    rollupOptions: {
      // 忽略警告
      onwarn(warning, defaultHandler) {
        // 忽略循环依赖警告
        if (warning.code === 'CIRCULAR_DEPENDENCY') return
        defaultHandler(warning)
      },
      // 优化输出
      output: {
        // 清除额外资源文件
        sanitizeFileName(name) {
          return name.replace(/[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g, '_');
        },
        // 分割代码
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  esbuild: {
    // 忽略构建过程中的类型错误
    logOverride: { 
      'this-is-undefined-in-esm': 'silent',
      'commonjs-variables-export': 'silent'
    },
    // 跳过类型检查
    tsconfigRaw: '{ "compilerOptions": { "skipLibCheck": true } }'
  }
})
