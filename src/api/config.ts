import axios from '@/utils/request'

export function getConfigs() {
  return axios({
    url: '/config',
    method: 'GET',
  })
}
