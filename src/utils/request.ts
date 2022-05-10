import axios, { AxiosRequestConfig } from 'axios'

export interface ResponseData {
  success: boolean
  code: number
  msg: string
  data: any
}

const instance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 5 * 60 * 1000,
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

function request(config: AxiosRequestConfig): any {
  return instance(config)
}

export default request
