import { api } from '../index'

export default {
  async AddPayment() {
    return await api.get('/checkout')
  },
}
