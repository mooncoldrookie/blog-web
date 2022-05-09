import axios from '@/utils/request'

export function getMomentList(page=1,pageSize=10) {
  return axios({
    url: '/moment/list',
    method: 'GET',
    params: {
      page,
      pageSize
    },
  })
}

export function likeMoment(id) {
  return axios({
    url: `/moment/like/${id}`,
    method: 'POST',
  })
}
