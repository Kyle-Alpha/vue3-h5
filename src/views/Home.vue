<template>
  <div class="home-main">
    <component :is="loading && LoadingTag"></component>
    <component :is="!loading && MusicCard" :data="musicData"></component>
    <van-empty v-if="noData" image="error" description="没有获取到数据哦">
      <van-button round class="retry-button" @click="retryData">点击重试</van-button>
    </van-empty>
    <component :is="!loading && RefreshCard"></component>
  </div>
</template>
<script lang="ts" setup name="Home">
import { computed, watch ,getCurrentInstance} from 'vue'
import LoadingTag from '@/components/LoadingTag/LoadingTag.jsx'
import MusicCard from '@/components/MusicCard.vue'
import RefreshCard from '@/components/RefreshCard.vue'
import { HomeHooks } from './hooks/HomeHooks'
import { refreshStore } from '@/stores/index'
import {useRouter} from 'vue-router'

// 引入数据响应模块
const { loading, noData, musicData, fetchMusicInfo } = HomeHooks()
fetchMusicInfo()
// console.log(getCurrentInstance());
const router = useRouter()
// 重新加载数据
const retryData = () => {
  fetchMusicInfo()
}
// 去列表页
const toList = () => {
  console.log(111);
  router.push('/List')
}
// 引入store模块
const refresher = refreshStore()

watch(
  computed(() => {
    // 接收store，返回ref对象，并监听
    return refresher.refreshNum
  }),
  (newVal, oldVal) => {
    // 监听值变化，刷新数据
    if (newVal === oldVal) return
    retryData()
  }
)
</script>
<style lang="less" scoped>
.home-main {
  padding-top: 50px;
  background: linear-gradient(180deg, @theme-color, rgba(0, 0, 0, 0));
  .retry-button {
    background: #fff;
    color: @theme-color;
    border: .5px solid @theme-color;
    width: 100px;
    height: 30px;
  }
}
</style>
