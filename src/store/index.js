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

    let userRef = fb.usersCollection.doc(curUser.uid)

    userRef.onSnapshot((doc) => {
      let profile = doc.data()
      if (profile.xp >= 100) {
        profile.xp -= 100
        profile.level++
        userRef.update(profile)
      }
      store.commit(`user/${SET_PROFILE}`, profile)
    })
  }
})

const state = {
  // resources: [
  //   {
  //     data: [],
  //     ref: fb.db.collection('data').doc('job').collection('resources'),
  //     keywords: ['Apply', 'Application', 'app', 'Job', 'Work', 'resume', 'profession', 'position', 'go']
  //   },
  //   {
  //     data: [],
  //     ref: fb.db.collection('data').doc('education').collection('resources'),
  //     keywords: ['Education', 'School' , 'classes', 'career', 'GED']
  //   }
  // ]
}

// state.resources.forEach(res => {
//   res.ref.onSnapshot(snapshot => {
//     snapshot.forEach(doc => {
//       res.data.push(doc.data())
//     })
//   })
// })

const store = new Vuex.Store({
  state,
  modules: {
    user,
    milestones,
  }
})

export default store