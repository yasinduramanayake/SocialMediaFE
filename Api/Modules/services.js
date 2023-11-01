import { api } from '../index'
import notification from '@/ApiConstance/toast'

export default {
  async AllCategories() {
    return await api.get('/allcategories')
  },
}
