import axios from '@/utils/request'

export function getBlogList(page = 1, pageSize = 10) {
  return axios({
    url: '/post/list',
    method: 'GET',
    params:{
      page,
      pageSize,
    }
  })
}
