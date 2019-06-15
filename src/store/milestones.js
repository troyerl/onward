// import { EG_MUTATION } from './mutationsTypes' // import mutation types from a const's file
import fb from '../fb'

const state = {

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
}

export default {
  namespaced: true, // makes us use store.<module>.xyz, instead of one global store.xyz
  state,
  mutations,
  actions
}