import request from '@/utils/request'
import { URL } from '@/config/config'

// 获取随机音乐信息
export const fetchRandMusic = () => {
  return request.get(`${URL.musicUrl}/rand.music?sort=热歌榜&format=json`)
}

// 获取随机音乐信息
// export const fetchRandMusic = () => {
//   return request.get(`${URL.musicUrl}/rand.music?sort=热歌榜&format=json`)
// }

// 获取歌手列表

export const fetchArtist = () => {
  return request.get(`${URL.neteaseUrl}/toplist/artist`)
}