import axios from '@/utils/request'
import { PagingQuery } from './types'

export function getPagingPosts(params: PagingQuery) {
  return axios({
    url: '/blog/posts',
    method: 'GET',
    params,
  })
}

export function getPostById(id) {
  return axios({
    url: '/blog/post/' + id,
    method: 'GET',
  })
}

interface PostsByCategoryRequest extends PagingQuery {
  categoryId: number
}

export function getPostsByCategory(params: PostsByCategoryRequest) {
  return axios({
    url: '/blog/posts/category',
    method: 'GET',
    params,
  })
}

interface PostsByTagRequest extends PagingQuery {
  tagId: number
}
export function getPostsByTag(params: PostsByTagRequest) {
  return axios({
    url: '/blog/posts/tag',
    method: 'GET',
    params,
  })
}

export function searchPosts(keyword: string) {
  return axios({
    url: '/blog/posts/search',
    method: 'GET',
    params: {
      keyword,
    },
  })
}

