<template>
  <div class="page-container">
    <header class="fixed-header">
      <slot name="header">
        <van-nav-bar
          left-arrow
          @click-left="onClickLeft"
          :title="pageTitle||(route.meta.title as string)"
        />
      </slot>
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
import { nextTick, ref, onMounted, onActivated } from 'vue'
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
defineProps({
  pageTitle: {
    type: String,
    default: ''
  }
})
const scrollHeight = ref<number>(0)
const scrollTop = ref<number>(0)
const getScrollHeight = () => {
  // 1. 获取屏幕高度
  const screenHeight = document.documentElement.clientHeight || window.innerHeight
  // 2. 获取表格距离顶部高度
  nextTick(() => {
    let { top = 0 } = document.querySelector('.scroll-container')?.getBoundingClientRect() || {}
    let bottom = (document.querySelector('.fixed-footer') as any)?.offsetHeight || 0
    console.log(top, bottom, '>>>>>>')
    scrollHeight.value = screenHeight - top - bottom
  })
}
const onClickLeft = ()=>{
 router.go(-1)
}
onActivated(() => {
  ;(document.querySelector('.scroll-container') as any).scrollTop = scrollTop.value
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
