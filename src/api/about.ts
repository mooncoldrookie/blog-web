import axios from '@/utils/request'

export function getAbout() {
  return axios({
    url: '/about/all',
    method: 'GET',
  })
}
