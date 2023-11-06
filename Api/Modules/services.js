import { api } from '../index'

export default {
  async AllCategories() {
    return await api.get('/allcategories')
  },

  async subCategoriesById(payload) {
    return await api.post('/showsubcategories', payload)
  },

  async serrvicesById(payload) {
    return await api.post('/showservices', payload)
  },
}
