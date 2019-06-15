import fb from '../fb'

import users from './users'
import conversations from './conversations'

import config from '../config'

firebase.initializeApp(config)

Vue.use(Vuex)

const state = {
  db: firebase.firestore()
}

export default new Vuex.Store({
  state,
  modules: {
    users,
    conversations
  }
})