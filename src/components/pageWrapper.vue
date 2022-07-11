<template>
  <div class="page-container">
    <header class="fixed-header">
      <slot name="header"></slot>
    </header>
    <section class="scroll-container" :style="{ height: scrollHeight + 'px' }">
      <slot></slot>
    </section>
    <footer class="fixed-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts" name="PageWrapper">
import { reactive, ref, onMounted, onActivated } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
const scrollHeight = ref<number>(0)
const scrollTop = ref<number>(0)
const getScrollHeight = () => {
  // 1. 获取屏幕高度
  const screenHeight = document.documentElement.clientHeight || window.innerHeight
  // 2. 获取表格距离顶部高度
  setTimeout(() => {
    let { top, bottom } = document.querySelector('.scroll-container')?.getBoundingClientRect() || {}
    scrollHeight.value = screenHeight - (top || 0) - (bottom || 0)
  }, 100)
}
onActivated(() => {
  (document.querySelector('.scroll-container') as any).scrollTop = scrollTop.value
})
onBeforeRouteLeave((to, from, next) => {
  scrollTop.value = document.querySelector('.scroll-container')?.scrollTop || 0
  next()
})

onMounted(() => {
  getScrollHeight()
})
</script>
<style scoped>
.scroll-container {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
