<template>
<div >
<h1>首页</h1>
</div>
</template>

<script setup lang='ts' name="DashBoard">
import { reactive,ref,onMounted} from 'vue'
import {fetchArtist} from '@/api/service';
import {useRouter} from 'vue-router';
const router = useRouter()
const toPlayer = () => {
  router.push('/player')
}
const keepText = ref('')

</script>
<style scoped lang="less"> 
</style>