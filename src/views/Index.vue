<template>
<div class="tabbar-container p-4">
   <router-view v-slot="{ Component }">
      <keep-alive >
        <component :is="Component"  />
      </keep-alive>
  </router-view>
  <van-tabbar route>
    <van-tabbar-item replace to="/dashBoard" icon="wap-home">主页</van-tabbar-item>
    <van-tabbar-item replace to="/todo" icon="todo-list">待办</van-tabbar-item>
    <van-tabbar-item replace to="/application" icon="shop">应用</van-tabbar-item>
    <van-tabbar-item replace to="/home" icon="manager">我的</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script setup lang="ts"></script>
<style scoped lang="less">
.tabbar-container{
  height: 100vh;
  padding-bottom: 50px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  background: @page-bg-color;
}
</style>
