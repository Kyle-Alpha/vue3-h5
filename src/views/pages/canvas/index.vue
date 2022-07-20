<template>
  <div class="page-container">
    <poster :options="options" @getBase64="getBase64" />
    <img :src="imgUrl" alt="" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import poster from '@/components/poster.vue'
const imgUrl = ref<string>('')
const options = reactive({
  width: 296,
  height: 502,
  config: [
    {
      type: 'rect',
      x: 0,
      y: 0,
      width: 296,
      height: 502,
      borderRadius: 8,
      bgColor: [
        [0, '#ffb8a2'],
        [1, '#f84b5d']
      ]
    },
    {
      type: 'rect',
      x: 12,
      y: 12,
      width: 272,
      height: 478,
      borderRadius: 8,
      bgColor: [
        [0.876, '#FFFFFF'],
        [0.526, '#FFECE7']
      ]
    },
    {
      type: 'img',
      src: 'https://wework.qpic.cn/wwpic/610934_Xu_5RBVCTQSLqrX_1652891182/0',
      x: 25,
      y: 27,
      width: 40,
      height: 40,
      borderRadius: 20
    },
    {
      type: 'text',
      text: '黄恺🙊🙊',
      x: 72,
      y: 27 + 16,
      fontSize: 16,
      color: '#31353C'
    },
    {
      type: 'text',
      text: '向你分享一个好东西',
      x: 72,
      y: 54 + 11,
      fontSize: 13,
      color: '#666'
    },
    {
      type: 'rect',
      x: 24,
      y: 80,
      width: 248,
      height: 298,
      borderRadius: 8,
      bgColor: '#F95563'
    },
    {
      type: 'img',
      src: 'https://wework.qpic.cn/wwpic/462474_A61hlh6eThO4TqM_1655091119/0',
      x: 24,
      y: 80,
      width: 248,
      height: 248,
      borderRadius: 8
    },
    {
      type: 'text',
      text: '惊喜价',
      x: 40,
      y: 342 + 16,
      fontSize: 16,
      color: '#fff'
    },
    {
      type: 'text',
      text: '¥ 5.20',
      x: 95,
      y: 355 + 4,
      fontSize: 16,
      color: '#fff'
    },
    {
      type: 'text',
      text: '111111122223333456',
      x: 24,
      y: 429,
      maxWidth: 150,
      fontSize: 18,
      color: '#31353c'
    },
    {
      type: 'text',
      text: '长按识别小程序码购买长按识别小程序码购买长按识别小程序码购买长按识别小程序码购买',
      x: 24,
      y: 461,
      maxWidth: 150,
      fontSize: 12,
      color: '#9ba6ba'
    },
    {
      type: 'img',
      src: 'https://wework.qpic.cn/wwpic/214172_O3L0IEwHT2-NufV_1652078499/0',
      x: 193,
      y: 394,
      width: 80,
      height: 80,
      borderRadius: 8
    }
  ]
})
const getBase64 = (base64: string) => {
  imgUrl.value = base64
}

</script>
<style scoped></style>
