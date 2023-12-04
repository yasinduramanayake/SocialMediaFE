import { api } from '../index'

export default {
  async AddOrder(payload) {
    return await api.post('/addorder', payload)
  },
  async CartOrders() {
    return await api.get('/cartorders')
  },

}
