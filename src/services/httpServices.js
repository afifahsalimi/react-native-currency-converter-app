import apiInstance from './httpManager'

const getLatestConversionRates = (data) => apiInstance.get(`/latest?base=${data}`)

export default {
  getLatestConversionRates
}