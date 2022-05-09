import axios from '@/utils/request'

export function getBlogById( id) {
  return axios({
    url: '/post',
    method: 'GET',
    params: {
      id,
    },
  })
}


export function getBlogListByTagName(name, page=1,pageSize=10) {
  return axios({
    url: '/post/listByTag',
    method: 'GET',
    params: {
      name,
      page,
      pageSize
    },
  })
}

export function getBlogListByCategoryName(name, page=1,pageSize=10) {
  return axios({
    url: '/post/listByCategory',
    method: 'GET',
    params: {
      name,
      page,
      pageSize
    },
  })
}

interface SearchParams {
  title:string
}

export function searchPostsByTitle(params:SearchParams){
  return axios({
    url: '/post/search',
    method: 'GET',
    params
  })
}