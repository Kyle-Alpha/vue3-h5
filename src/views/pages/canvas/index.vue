<template>
  <div class="page-container">
    <canvas id="canvas" v-show="false"></canvas>
    <img :src="imgUrl" class="m-auto mt-4" style="width: 296px; height: 502px" alt="" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import {
  loadAllImg,
  fillRoundRect,
  drawRadiusImg,
  drawTextOverflow,
  drawText
} from '@/utils/canvas'
const imgUrl = ref<string>('')
onMounted(() => {
  let canvas: any = document.getElementById('canvas')
  let ratio = window.devicePixelRatio || 2
  canvas.width = 296 * ratio
  canvas.height = 502 * ratio
  var context = canvas.getContext('2d')

  const draw = (context: any) => {
    loadAllImg([
      'https://wework.qpic.cn/wwpic/610934_Xu_5RBVCTQSLqrX_1652891182/0',
      'https://wework.qpic.cn/wwpic/462474_A61hlh6eThO4TqM_1655091119/0',
      'https://wework.qpic.cn/wwpic/214172_O3L0IEwHT2-NufV_1652078499/0'
    ]).then((res: any) => {
      drawPoster(context, res)
      imgUrl.value = canvas.toDataURL('image/png')
    })
  }
  const drawPoster = (context: any, imgList: any) => {
    fillRoundRect(context, 0, 0, 296 * ratio, 502 * ratio, 8*ratio, [
      [0, '#ffb8a2'],
      [1, '#f84b5d']
    ])
    fillRoundRect(context, 12 * ratio, 12 * ratio, 272 * ratio, 478 * ratio, 8 * ratio, [
      [0.876, '#FFFFFF'],
      [0.526, '#FFECE7']
    ])
    drawRadiusImg(context, imgList[0], 25 * ratio, 27 * ratio, 40 * ratio, 40 * ratio, 20 * ratio)

    drawText(context, '黄恺🙊🙊', 72 * ratio, (27 + 16) * ratio, {
      fontSize: 16 * ratio,
      color: '#31353C'
    })
    drawText(context, '向你分享一个好东西', 72 * ratio, (54 + 11) * ratio, {
      fontSize: 13 * ratio,
      color: '#666'
    })
    fillRoundRect(context, 24 * ratio, 80 * ratio, 248 * ratio, 298 * ratio, 8 * ratio, '#F95563')
    drawRadiusImg(context, imgList[1], 24 * ratio, 80 * ratio, 248 * ratio, 248 * ratio, 8 * ratio)
    drawText(context, '惊喜价', 40 * ratio, (342 + 16) * ratio, {
      fontSize: 16 * ratio,
      color: '#fff'
    })
    drawText(context, '¥ 5.20', 95 * ratio, (355 + 4) * ratio, {
      fontSize: 16 * ratio,
      color: '#fff'
    })
    drawTextOverflow(
      context,
      '长按识别小程序码购买长按识别小程序码购买长按识别小程序码购买长按识别小程序码购买',
      150 * ratio,
      1,
      `${18 * ratio}px  黑体 `,
      '#31353C',
      1.5,
      24 * ratio,
      (407 + 22) * ratio
    )
    drawTextOverflow(
      context,
      '长按识别小程序码购买长按识别小程序码购买长按识别小程序码购买长按识别小程序码购买',
      150 * ratio,
      1,
      `${12 * ratio}px  黑体 `,
      '#9BA6BA',
      1.5,
      24 * ratio,
      (439 + 22) * ratio
    )
    drawRadiusImg(context, imgList[2], 193 * ratio, 394 * ratio, 80 * ratio, 80 * ratio, 8 * ratio)
  }
  draw(context)
})
</script>
<style scoped></style>
