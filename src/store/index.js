import Vue from 'vue'
import Vuex from 'vuex'

import fb from '../fb'
import user from './user'
import milestones from './milestones'

Vue.use(Vuex)

const state = {

}

export default new Vuex.Store({
  state,
  modules: {
    user,
    milestones,
  }
})