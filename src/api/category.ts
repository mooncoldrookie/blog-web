import axios from '@/utils/request'

export function getCategoryList(page=1,pageSize=10) {
  return axios({
    url: '/category/all',
    method: 'GET',
    params: {
      page,
      pageSize
    },
  })
}

