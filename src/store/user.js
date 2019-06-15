// import { EG_MUTATION } from './mutationsTypes' // import mutation types from a const's file
import {SET_CURRENT_USER, SET_PROFILE} from './mutationsTypes'
import fb from '../fb'


const state = {
    currentUser: null,
    userProfile: {}
}

// Getters are to Vuex state as 'computed' is to individual components
const getters = {

    /*
      egGetter: (state, otherGetters, rootState) => (getterArgs) => {
        return state.egData.find(thing => thing == getterArgs.reqirement)
      }

      call with: this.$store.<module>.getters.egGetter(args)
      call with: ...mapGetters['egGetter'], then this.egGetter(args)
    */

}

// Mutations are the ONLY way to change state in Vuex
const mutations = {

    /*

      [EG_MUTATION] (state, payload) {
        state.egData = { ...state.egData, newProp: payload.obj.data }
      }

      call with: this.$store.<module>.commit({type: EG_MUTATION, payload: obj})
      call with: ...mapMutations['egMutation'], then this.egMutation({type: EG_MUTATION, payload: obj})

    */
    [SET_PROFILE](state, payload) {
        state.userProfile = payload
    },

    [SET_CURRENT_USER](state, payload) {
        state.currentUser = payload
    },
}

// Actions are how to do ASYNC work (eg, reach out to backend), and will eventually COMMIT a mutation
const actions = {

    /*
      egAction (context = {state, commit, rootState}, payload) {
        // async work
        context.commit({type: EG_MUTATION, payload: obj})
        // can return a Promise, or use async await
      }

      call with: this.$store.<module>.dispatch('egAction', payload)
      call with: ...mapActions['egAction'], then this.egAction(payload)
    */


    login(context, creds) {
        return new Promise((resolve, reject) => {
            fb.auth.signInWithEmailAndPassword(creds.email, creds.password)
                .then((res) => {
                    const userId = res.user.uid
                    console.log(userId)
                    fb.db.collection('users').doc(userId).get().then((doc) => {
                        console.log(doc.data())
                        context.commit(SET_CURRENT_USER, res.user)
                        context.commit(SET_PROFILE, doc.data())
                        resolve()
                    })
                }).catch((err) => {
                reject(err)
            })
        })
    },
    signup(context, creds) {
        return new Promise((resolve, reject) => {
            fb.auth.createUserWithEmailAndPassword(creds.email, creds.password)
                .then((res) => {
                    context.commit(SET_CURRENT_USER, res.user)
                    let userId = res.user.uid
                    let user = {
                        email: creds.email,
                        firstName: creds.firstName,
                        lastName: creds.lastName,
                        dob: creds.dob,
                        xp: 0
                    }
                    fb.db.collection('users').doc(userId).set(user)
                        .then((res) => {
                            context.commit(SET_PROFILE, user)
                        })
                }).catch((err) => {
                reject(err)
            })
        })
    },
    logout(context) {
        return new Promise((resolve, reject) => {
            fb.auth.signOut().then(() => {
                context.commit(SET_CURRENT_USER, null)
                resolve()
            }).catch((err) => {
                reject(err)
            })
        })
    }
}

export default {
    namespaced: true, // makes us use store.<module>.xyz, instead of one global store.xyz
    state,
    mutations,
    actions
}