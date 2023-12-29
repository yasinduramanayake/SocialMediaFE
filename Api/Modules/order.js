import { api } from '../index'

export default {
  async AddOrder(payload) {
    return await api.post('/addorder', payload)
  },
  async CartOrders(payload) {
    return await api.post('/cartorders', payload)
  },

  async TrackOrder(payload) {
    return await api.post('/trackorder', payload)
  },

  async DeleteOrder(id) {
    return await api.delete(`deleteorder/${id}`).then(() => {
      window.location.href = '/cart'
    })
  },
}
