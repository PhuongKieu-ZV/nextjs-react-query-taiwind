import axios from 'axios'
import qs from 'qs'
import cookie from 'js-cookie'

const APIService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXTERNAL_BACKEND_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

APIService.interceptors.request.use(
  (request: any) => {
    if (!request.params) {
      request.params = {}
    }
    const token = cookie.get('token')
    if (token) {
      request.headers.Authorization = `Bearer ${token}`
    } else {
      delete request.headers.Authorization
    }
    request.baseURL = process.env.NEXT_PUBLIC_EXTERNAL_BACKEND_API
    request.paramsSerializer = (params: any) => qs.stringify(params)
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for API calls
APIService.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default APIService
