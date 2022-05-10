import axios from '@/utils/request'

export function getAllCategory() {
  return axios({ method: 'GET', url: '/blog/categories', })
}
