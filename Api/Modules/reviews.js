import { api } from '../index'
import notification from '@/ApiConstance/toast'

export default {
  async AddReview(payload) {
    return await api.post('/addreview', payload).then(() => {
      notification.toast('SuccessFully Reviewed.Thanks!', 'success')
    })
  },
  async AllReviews() {
    return await api.get('/reviews')
  },

  async AddContact(payload) {
    return await api.post('/addcontactus', payload).then(() => {
      notification.toast('SuccessFully Contacted.We Will Let You Know!', 'success')
    })
  }
   
}
