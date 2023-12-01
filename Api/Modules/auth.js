import { api } from '../index'
import notification from '@/ApiConstance/toast'

export default {
  async register(payload) {
    return await api.post('/register', payload).then(() => {
      notification.toast('SuccessFully Registered', 'success')
      window.location.href = '/'
    })
  },
  async login(payload) {
    return await api.post('/login', payload).then(() => {
      notification.toast('SuccessFully Logged In', 'success')
      window.location.href = '/'
    })
  },
}
