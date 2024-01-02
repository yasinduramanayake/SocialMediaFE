import { api } from '../index'
import notification from '@/ApiConstance/toast'

export default {
  async register(payload, cartProp) {
    return await api.post('/register', payload).then((res) => {
      notification.toast(
        'SuccessFully Registered.You Will Automatically Login',
        'success'
      )
      const token = res.data.data.token
      const role = res.data.data.roles[0].name

      localStorage.setItem('role', role)
      localStorage.setItem('token', token)

      if (cartProp === 'fromCart') {
        window.location.href = '/cart'
      } else {
        window.location.href = '/'
      }
    })
  },
  async login(payload, cartProp) {
    return await api.post('/login', payload).then((res) => {
      notification.toast('SuccessFully Logged In', 'success')
      const token = res.data.data.token
      const role = res.data.data.roles[0].name

      localStorage.setItem('role', role)
      localStorage.setItem('token', token)
      if (cartProp === 'fromCart') {
        window.location.href = '/cart'
      } else {
        window.location.href = '/'
      }
    })
  },
  async logout() {
    return await api.get('/logout').then((res) => {
      notification.toast('SuccessFully Log Out', 'success')
      window.location.href = '/'
    })
  },

  async forgot(payload) {
    return await api.post('/forgot', payload).then((res) => {
      notification.toast('SuccessFully Sent The Link', 'success')
    })
  },

  async reset(payload) {
    return await api.post('/reset', payload).then((res) => {
      notification.toast('SuccessFully Reset The Password', 'success')
    })
  },
}
