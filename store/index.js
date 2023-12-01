import Vuex from 'vuex'
import profile from './profile'
const createStore = () => {
  console.log('Creating store...')

  return new Vuex.Store({
    modules: {
      profile,
    },
  })
}

export default createStore
