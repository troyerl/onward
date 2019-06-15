import Vue from 'vue'
import Vuex from 'vuex'

import fb from '../fb'
import users from './users'

Vue.use(Vuex)

const state = {
  db: fb.db, // not sure if needed yet, depends on how components use it. Time will tell shortly
}

export default new Vuex.Store({
  state,
  modules: {
    users,
  }
})