<template>
  <page-wrapper>
    <template #header>
      <div class="custom-header bg-blue-400  text-lg flex-center">头部</div>
    </template>
    <template #footer>
      <div class="custom-footer bg-blue-500 text-center flex-center">底部</div>
    </template>

    <van-list
      ref="listRef"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell  v-for="item in list" :key="item" :title="item" @click="toDetail" />
    </van-list>
  </page-wrapper>
</template>

<script setup lang="ts" name="List">
import { reactive, ref, onMounted } from 'vue'
import type { ListInstance } from 'vant'
import { useRouter } from 'vue-router'
const text = ref('')
const router = useRouter()

const listRef = ref<ListInstance>()

listRef.value?.check()
onMounted(() => {
  listRef.value?.check()
  console.log(listRef.value)
})
const toDetail = () => {
  console.log(text.value)
  router.push('/Detail')
}
const list = ref([])
const loading = ref(false)
const finished = ref(false)
for (let i = 0; i < 20; i++) {
  list.value.push(list.value.length + 1)
}
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }

    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= 80) {
      finished.value = true
    }
  }, 1000)
}
</script>
<style scoped>
.custom-header,.custom-footer {
  height: 56px;
}
</style>
