import axios from 'axios'

const apiInstance = axios.create({
  baseURL: "http://fixer.handlebarlabs.com",
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const setAuthHeader = (token) => {
  console.log('token', token)
  apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default apiInstance