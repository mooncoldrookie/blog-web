import axios from '@/utils/request'

export function getHitokoto() {
  return axios({
    url: 'https://v1.hitokoto.cn/?c=a',
    method: 'GET',
  })
}

export function getRecommendPosts() {
  return axios({
    url: '/post/recommend',
    method: 'GET',
  })
}
