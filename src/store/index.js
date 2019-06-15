import Vue from 'vue'
import Vuex from 'vuex'

import fb from '../fb'
import user from './user'
import milestones from './milestones'
import { SET_CURRENT_USER, SET_PROFILE } from "./mutationsTypes";

Vue.use(Vuex)

fb.auth.onAuthStateChanged((curUser) => {
  if (curUser) {
    store.commit(`user/${SET_CURRENT_USER}`, curUser)
    store.dispatch(`user/fetchUserProfile`)

    fb.usersCollection.doc(curUser.uid).onSnapshot((doc) => {
      store.commit(`user/${SET_PROFILE}`, doc.data())
    })
  }
})

const state = {

}

const store = new Vuex.Store({
  state,
  modules: {
    user,
    milestones,
  }
})

export default store