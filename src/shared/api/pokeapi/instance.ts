import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL_POKEMON,
  // withCredentials: true,
  validateStatus(status) {
    return status >= 200 && status < 300
  },
})

http.interceptors.request.use(async (config) => {
  return config
})
