import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// 配置参考： https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    styleImport({
      resolves: [VantResolve()]
    }),
    VueSetupExtend()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/style/global.less";' // 加载全局样式，使用less特性
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host:true,
    proxy: {
      '/api': {
        target: 'http://API网关所在域名',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
