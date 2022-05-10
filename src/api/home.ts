import axios from '@/utils/request'

export function getHomePosts() {
  return axios({
    url: '/blog/homePosts',
    method: 'GET',
  })
}
export function getRecommendedPosts() {
  return axios({
    url: '/blog/recommendedPosts',
    method: 'GET',
  })
}

export function getTags() {
  return axios({
    method: 'GET',
    url: '/blog/tags',
  })
}
