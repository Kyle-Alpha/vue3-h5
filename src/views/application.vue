<template>
  <div class="application">
    <div
      class="app-item"
      v-for="item in state.application"
      :key="item.code"
      @click="router.push(item.path)"
    >
      <van-icon :name="item.icon" size="32px" />
      <div class="name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({
  application: [
    {
      icon: 'photo',
      name: '裁剪工具',
      code: 'cropper',
      path: '/cropper'
    },
    {
      icon: 'bar-chart-o',
      name: '图表',
      code: 'chart',
      path: '/chart'
    },
    {
      icon: 'wap-nav',
      name: '我的列表',
      code: 'list',
      path: '/list'
    },
    {
      icon: 'audio',
      name: '播放器',
      code: 'player',
      path: '/player'
    },
    {
      icon: 'records',
      name: '表单',
      code: 'form',
      path: '/form'
    },
    {
      icon: 'new-o',
      name: '画布',
      code: 'canvas',
      path: '/canvas'
    },
  ]
})
</script>
<style scoped lang="less">
.application {
  display: flex;
  flex-wrap: wrap;
  background-color: @card-bg-color;
  padding: 6px;
  border-radius: 8px;
  .app-item {
    width: 20%;
    padding: 4px;
    font-size: 14px;
    margin-bottom: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .name{
      margin-top: 6px;
    }
  }
}
</style>
