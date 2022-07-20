const drawRoundRectPath = (ctx: any, width: number, height: number, radius: number) => {
  ctx.beginPath()
  //从右下角顺时针绘制，弧度从0到1/2PI
  ctx.arc(width - radius, height - radius, radius, 0, Math.PI / 2)

  //矩形下边线
  ctx.lineTo(radius, height)

  //左下角圆弧，弧度从1/2PI到PI
  ctx.arc(radius, height - radius, radius, Math.PI / 2, Math.PI)

  //矩形左边线
  ctx.lineTo(0, radius)

  //左上角圆弧，弧度从PI到3/2PI
  ctx.arc(radius, radius, radius, Math.PI, (Math.PI * 3) / 2)

  //上边线
  ctx.lineTo(width - radius, 0)

  //右上角圆弧
  ctx.arc(width - radius, radius, radius, (Math.PI * 3) / 2, Math.PI * 2)

  //右边线
  ctx.lineTo(width, height - radius)
  ctx.closePath()
}
/**该方法用来绘制一个有填充色的圆角矩形
 *@param ctx:canvas的上下文环境
 *@param x:左上角x轴坐标
 *@param y:左上角y轴坐标
 *@param width:矩形的宽度
 *@param height:矩形的高度
 *@param radius:圆的半径
 *@param fillColor:填充颜色
 **/
export const fillRoundRect = (
  ctx: any,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fillColor: string | Array<[number, string]> = '#fff'
) => {
  //圆的直径必然要小于矩形的宽高
  if (2 * radius > width || 2 * radius > height) {
    return false
  }

  ctx.save()
  ctx.translate(x, y)
  //绘制圆角矩形的各个边
  drawRoundRectPath(ctx, width, height, radius)
  if (typeof fillColor === 'string') {
    ctx.fillStyle = fillColor //若是给定了值就用给定的值否则给予默认值
  } else {
    let linearGradient = ctx.createLinearGradient(x, y, width, height)
    for (const item of fillColor) {
      linearGradient.addColorStop(...item)
    }
    ctx.fillStyle = linearGradient
  }
  ctx.fill()
  ctx.restore()
}

/**
 * 圆角图片
 * @param {Object} ctx - canvas组件的绘图上下文
 * @param {String} img - 图片地址
 * @param {Number} x - x轴坐标
 * @param {Number} y - y轴坐标
 * @param {String} w - 图片宽度
 * @param {String} h - 图片高度
 * @param {Number} r - 圆角半径
 */
export const drawRadiusImg = (
  ctx: any,
  img: string,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) => {
  ctx.save()
  // 画一个图形
  if (w < 2 * r) r = w / 2
  if (h < 2 * r) r = h / 2
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
  ctx.strokeStyle = '#ffffff' // 设置绘制圆形边框的颜色
  ctx.stroke()
  ctx.clip()
  ctx.drawImage(img, x, y, w, h)
  ctx.restore()
}

/**
 * 绘制文字
 * @param {Object} ctx - canvas组件的绘图上下文
 * @param {String} text - 文本内容
 * @param {Number} x - 文本的x坐标
 * @param {Number} y - 文本的y坐标
 * @param {Object} fontObj - 字体样式
 */
export const drawText = (ctx: any, text: string, x: number, y: number, fontObj: any) => {
  ctx.beginPath()
  ctx.font = `${fontObj.fontSize}px bold 黑体`
  ctx.fillStyle = `${fontObj.color}`
  ctx.fillText(text, x, y)
  ctx.closePath()
}
/**
 * 多行文本溢出
 * @param {Object} ctx - canvas组件的绘图上下文
 * @param {String} text - 文本内容
 * @param {Number} maxWidth - 文本最大宽度
 * @param {Number} maxRow - 文本最多显示行数
 * @param {String} font - 字体样式
 * @param {String} color - 文本颜色
 * @param {Number} lineHeight - 文本行高
 * @param {Number} x - 文本的x坐标
 * @param {Number} y - 文本的y坐标
 */
export const drawTextOverflow = (
  ctx: any,
  text: string,
  maxWidth: number,
  maxRow: number,
  font: any,
  color: string,
  lineHeight: number,
  x: number,
  y: number
) => {
  let temp = ''
  let row = []
  text = text.replace(/[\r\n]/g, '') // 去除回车换行符
  let arr = text.split('')
  const { fontSize, fontWeight, fontFamily } = font
  ctx.font = `normal normal ${fontWeight} ${fontSize}px ${fontFamily}` // 注意：一定要先设置字号，否则会出现文本变形
  ctx.fillStyle = color

  if (ctx.measureText(text).width < maxWidth) {
    row.push(text)
  } else {
    for (let i = 0; i < arr.length; i++) {
      // 超出最大行数且字符有剩余，添加...
      if (row.length == maxRow && i <= arr.length - 1) {
        row[row.length - 1] += '...'
        break
      }

      // 字符换行计算
      if (ctx.measureText(temp).width < maxWidth) {
        temp += arr[i]

        // 遍历到最后一位字符
        if (i === arr.length - 1) {
          row.push(temp)
        }
      } else {
        i-- // 防止字符丢失
        row.push(temp)
        temp = ''
      }
    }
  }

  // 绘制文本
  for (let i = 0; i < row.length; i++) {
    ctx.fillText(row[i], x, y + i * lineHeight, maxWidth)
  }
  return row.length * lineHeight // 返回文本高度
}
/**
 * 异步加载单张图片
 * @param {String} url - 图片数组
 */
export const loadImg = (url: string) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = url
    img.onload = () => resolve(img)
  })
}
/**
 * 异步加载图片
 * @param {Array} imgList - 图片数组
 */
export const loadAllImg = (imgList: Array<string>) => {
  return Promise.all(imgList.map(loadImg))
}
