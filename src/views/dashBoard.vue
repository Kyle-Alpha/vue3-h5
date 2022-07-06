<template>
<div class="page-container">
  <input type="text" v-model="keepText">
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
.page-container{
  display:flex;
  flex-wrap:wrap;
  .item{
    display:flex;
    margin:13px;
    flex-direction:column;
    img{
      width:48px;
      height:48px;
      border-radius:8px;
    }
  }
}
</style>