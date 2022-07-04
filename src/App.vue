<script setup lang="ts">
import { watch } from 'vue'
import { appStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
const store = appStore()
// 解构并使数据具有响应式
const { cacheViews } = storeToRefs(store)
console.log(cacheViews);
watch(
  () => cacheViews.value,
  (newVal, oldVal) => {
    console.log(newVal, oldVal)
  }
)
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <router-view v-slot="{ Component }">
      <keep-alive >
        <component :is="Component"  />
      </keep-alive>
  </router-view>
</template>

<style lang="less">
@import url('@/style/reset.less');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
