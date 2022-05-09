import axios from '@/utils/request'

export function getArchives() {
  return axios({
    url: 'archives',
    method: 'GET',
  })
}
