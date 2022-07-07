<template>
  <div class="page-container">
    <van-list
  v-model:loading="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" @click="toDetail" />
</van-list>
  </div>
</template>

<script setup lang="ts" name="List">
import { reactive, ref, onMounted } from 'vue'
import {useRouter} from 'vue-router';
const text = ref('')
const router = useRouter()
const toDetail =()=>{
  console.log(text.value);
  router.push('/Detail')
}
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 80) {
          finished.value = true;
        }
      }, 1000);
    };
</script>
<style scoped></style>
