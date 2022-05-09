import axios from 'axios'

export interface ResponseData {
  code: number
  msg: string
  data: any
}

const request = axios.create({
  baseURL: 'http://localhost:6281',
  timeout: 5 * 60 * 1000,
})

request.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

request.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default request
