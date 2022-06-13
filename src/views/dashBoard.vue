<template>
<div class="page-container">
  dashBoard
</div>
</template>

<script setup lang='ts' name="DashBoard">
import { reactive,ref,onMounted} from 'vue'
import {useRouter} from 'vue-router';
const router = useRouter()
const toPlayer = () => {
  router.push('/player')
}
</script>
<style scoped> 
.page-container{
  height: 3000px;
  background-color: antiquewhite;
}
</style>