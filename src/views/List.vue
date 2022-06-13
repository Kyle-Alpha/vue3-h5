<template>
  <div>
    <input type="text" v-model="text">
    <van-button @click="toDetail">去详情页</van-button>
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
</script>
<style scoped></style>
