import axios from 'axios'

const httpProvider = () => {
  return axios.create({
    baseURL: `https://api.calivahack.io`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'apikey': 'Caliva420'
    }
  })
}

export default {
  getProducts: () => {
    return httpProvider().get('/products/v2/retail')
  }
}
