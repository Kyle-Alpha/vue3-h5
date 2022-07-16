<script setup lang="ts">
import { watch, ref } from 'vue'
import { appStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const store = appStore()
console.log(route)
// 解构并使数据具有响应式
const { cacheViews } = storeToRefs(store)
console.log(cacheViews)
const transitionName = ref('slide-right')
// watch(
//   () => route,
//   (newVal:any, oldVal:any) => {
//     console.log(newVal,oldVal);
//     transitionName.value = (newVal.meta.level<oldVal.meta.level) ? 'van-slide-left' : 'van-slide-right'
//   },
//   {deep:true}
// )
router.beforeEach((to:any,from:any,next ) => {
  if(from.path==='/'){
    transitionName.value=''
    next()
    return
  }
  transitionName.value = (from.meta.level<to.meta.level) ? 'slide-left' : 'slide-right'
  next()
})
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <keep-alive :max="6" :include="cacheViews">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style lang="less">
@distanceX: 100%;

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  opacity: 0;
  position: absolute;
  width: 100%;
  transition: all 0.35s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(@distanceX, 0);

}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-@distanceX, 0);
}
</style>
