import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { getTokenCookie, removeAllCookies, setTokenCookie } from "../utils/CookiesUtil"

const baseURL = 'http://localhost:3334'

export const api = axios.create({ baseURL })

api.interceptors.request.use(
  async (axiosConfig: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    let token = getTokenCookie()

    if (axiosConfig.headers === undefined) {
      axiosConfig.headers = {}
    }

    if (token) {
      axiosConfig.headers.Authorization = `Bearer ${token}`
    }

    axiosConfig.headers = {
      ...axiosConfig.headers}
    return axiosConfig
  }
)

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const status = error.response?.status
    if (status === 500) {
      // window.location.href = '/500'
    } else if (status === 401 || status === 403) {
      removeAllCookies()
      window.location.href = "/login"
    } else if (status === 404) {
      // window.location.href = '/404'
    }
    return Promise.reject(error)
  }
)

export default api