<template>
  <div class="page-container">
    <div class="application">
      <div class="app-item" v-for="item in state.application" :key="item.code" @click="router.push(item.path)">
        <img
          src="http://p1.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg?param=150y150"
          alt=""
        />
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import {useRouter} from 'vue-router';
const router = useRouter()
const state = reactive({
  application:[
    {
      icon:'http://p1.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg?param=150y150',
      name:'裁剪工具',
      code:'cropper',
      path:'/cropper'
    },
    {
      icon:'http://p1.music.126.net/ZyUjc7K_GDpD8MO1-GQkmA==/109951166952706664.jpg?param=150y150',
      name:'图表',
      code:'chart',
      path:'/chart'
    },
  ]
})
</script>
<style scoped lang="less">
.page-container {
  .application {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .app-item{
      margin: 10px;
      img{
        width: 48px;
        height: 48px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
