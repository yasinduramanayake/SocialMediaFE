import { api } from '../index'

export default {
  async AddPayment(payload) {
    return await api.post('/checkout', payload)
  },
  async SuccessTransaction() {
    return await api.get('/successtransaction')
  },
}
