<template>
<div class="flex-y-center page-container">
  <div class="cropper">
    <H5Cropper :option="{}"  @getFile="getFile"/>
  </div>
    <img :src="url" class="cropper-img" alt="">
</div>
</template>

<script setup lang='ts'>
import "vue-cropper-h5/dist/style.css";
import H5Cropper  from 'vue-cropper-h5'
import { reactive,ref,onMounted} from 'vue'
const url = ref('')
const getFile = (file:any)=>{
  url.value=webkitURL.createObjectURL(file)
  
}
</script>
<style scoped lang="less">
.cropper{
  margin-top: 20px;
  width: 100px;
  height: 100px;
  border: 1px ;
  border-radius: 8px;
  position: relative;
  border: 1px solid #999;
  &::before{
    position: absolute;
    content: '';
    width: 1px;
    background-color: #999;
    height: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  &::after{
    position: absolute;
    background-color: #999;
    content: '';
    height: 1px;
    width: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
  .cropper-img{
    margin: 20px auto;
    width: 200px;
  }
.flex-y-center{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>