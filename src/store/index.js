import {db} from '../fb'

import users from './users'

const state = {
  db, // not sure if needed yet, depends on how components use it. Time will tell shortly
}

export default new Vuex.Store({
  state,
  modules: {
    users,
  }
})