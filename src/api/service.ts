import request from '@/utils/request'
import { URL,CT} from '@/config/config'

const params = {
  app_id:CT.appId,
  app_secret:CT.appSecret
}
// 获取随机音乐信息
export const fetchRandMusic = () => {
  return request.get(`${URL.musicUrl}/rand.music?sort=热歌榜&format=json`)
}

// 获取网易热评
export const fetchComments = () => {
  return request.get(`${URL.musicUrl}/comments.163?format=json`)
}
// 获取节假日
export const fetchHoliday = () => {
  return request.get(`${URL.freeApi}/holiday/recent/list`,{params:params})
}
