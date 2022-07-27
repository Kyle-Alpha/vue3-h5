<template>
  <page-wrapper>
    <template #header>
      <van-search v-model="keyword" placeholder="请输入搜索关键词" @search="onSearch" />
    </template>
    <van-list
      ref="listRef"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        v-for="item in (!searchFlag ? list : filterList)"
        :key="item"
        class="flex justify-start flex-col items-center p-3 card"
        @click="toDetail"
      >
        <div class="text-lg truncate m-w-279 text-left" v-html="item.title"></div>
        <div class="flex items-center mb-2">
          <img
            src="https://avatars.githubusercontent.com/u/30764933?s=200&v=4"
            class="w-4 h-4 mr-2 rounded-full"
            alt=""
          />
          <span v-html="item.author"></span>
        </div>
        <div
          class="text-sm text-gray-600 truncate m-w-279 text-left"
          v-for="childItem in item.paragraphs"
          v-html="childItem"
        ></div>
      </div>
    </van-list>
  </page-wrapper>
</template>

<script setup lang="ts" name="List">
import { reactive, ref, onMounted, watch } from 'vue'
import { tang } from '@/api/tang'
import { ListInstance, Search } from 'vant'
import { useRouter } from 'vue-router'
const router = useRouter()
const keyword = ref('')
const listRef = ref<ListInstance>()

const toDetail = () => {
  router.push('/Detail')
}
const list = ref<Array<any>>([])
const filterList = ref<Array<any>>([])
let searchFlag = ref(false)
const onSearch = (val: string) => {
  if (!val.trim().length) {
    finished.value = false
    searchFlag.value = false
    return
  }
  searchFlag.value = true
  finished.value = true
  filterList.value = JSON.parse(JSON.stringify(list.value)).filter((item:any) => {
    if (JSON.stringify(item).includes(val)) {
      const reg = new RegExp(val, 'g')
      Object.assign(item, JSON.parse(JSON.stringify(item).replace(reg, `<em>${val}</em>`)))
      return true
    }
    return false
  })
}
const loading = ref(false)
const finished = ref(false)
watch(keyword,(val)=>{
  !val.trim().length && onSearch('')
})
list.value.push(...tang.slice(0, 10))
let index = 10
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    list.value.push(...tang.slice(index, index + 10))
    index += 10
    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= 200) {
      finished.value = true
    }
  }, 1000)
}
</script>
<style scoped lang="less">
.m-w-279 {
  max-width: 279px;
}
.card {
  background-color: @card-bg-color;
  margin: 10px;
  border-radius: 8px;
}
</style>
