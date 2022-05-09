import axios from '@/utils/request'



export function getAllTags() {
  return axios({
    url: '/tag/all',
    method: 'GET',
  })
}
