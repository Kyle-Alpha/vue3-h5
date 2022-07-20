<template>
  <div class="poster">
    <canvas id="canvas" v-show="false" />
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
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['getBase64'])
onMounted(() => {
  let canvas: any = document.getElementById('canvas')
  let ratio =  window.devicePixelRatio || 2
  canvas.width = (props.options.width ?? 200) * ratio
  canvas.height = (props.options.height ?? 200) * ratio
  let context = canvas.getContext('2d')
  const eventList: any = [],
    imgList = []
  for (const item of props.options.config || []) {
    if (item.type === 'img') {
      imgList.push(item.src)
      eventList.push({
        eventName: drawRadiusImg,
        type: item.type,
        args: [
          context,
          item.src,
          item.x * ratio,
          item.y * ratio,
          item.width * ratio,
          item.height * ratio,
          item.borderRadius * ratio
        ]
      })
    } else if (item.type === 'text') {
      eventList.push({
        eventName: drawTextOverflow,
        type: item.type,
        args: [
          context,
          item.text,
          (item.maxWidth || 200) * ratio,
          item.maxRow || 1,
          {
            fontSize: item.fontSize * ratio || 32,
            fontWeight: item.fontWeight || 400,
            fontFamily: item.fontFamily || 'Microsoft Yahei'
          },
          item.color || '#000',
          item.lineHeight || (1.5*item.fontSize * ratio),
          item.x * ratio,
          item.y * ratio
        ]
      })
    } else if (item.type === 'rect') {
      eventList.push({
        eventName: fillRoundRect,
        type: item.type,
        args: [
          context,
          item.x * ratio,
          item.y * ratio,
          item.width * ratio,
          item.height * ratio,
          item.borderRadius * ratio,
          item.bgColor || '#fff'
        ]
      })
    } else {
    }
  }
  loadAllImg(imgList).then((imgs) => {
    eventList.forEach((item: any) => {
      if (item.type === 'img') {
        item.args[1] = imgs.shift()
      }
      item['eventName'](...item.args)
    })
    emit('getBase64', canvas.toDataURL('image/png'))
  })
})
</script>
<style scoped></style>
