// import { EG_MUTATION } from './mutationsTypes' // import mutation types from a const's file
import fb from '../fb'
import {SET_CURRENT_USER, SET_PROFILE, UPDATE_MILESTONES} from "./mutationsTypes";
import uuidv4 from 'uuid/v4'

const state = {
  milestones: []
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

  [UPDATE_MILESTONES](state, payload) {
    state.milestones = payload
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

  addMilestone(context, milestone) {
    return new Promise((resolve, reject) => {
      let tasks = milestone.tasks
      let taskRefs = []

      tasks.forEach((task) => {
        let tid = uuidv4()
        let taskRef = fb.db.collection('tasks').doc(tid)
        taskRefs.push(taskRef)
        taskRef.set({
          title: task.title,
          complete: false,
          points: 10,
        })
      })

      let msId = uuidv4()
      let msRef = fb.db.collection('milestones').doc(msId)
      msRef.set({
        title: milestone.title,
        dueDate: milestone.dueDate,
        tasks: taskRefs,
      }).then(() => {
        fb.db.collection('users').doc(context.rootState.user.currentUser.uid).update({
          milestones: [...context.rootState.user.userProfile.milestones, msRef]
        })
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  },
  completeTask(context, task) {
    return new Promise((resolve, reject) => {
      // console.log('complete task')
      // console.log(task)
      fb.db.collection('tasks').doc(task.ref.id).update({
        complete: true
      }).then(() => {
        fb.db.collection('users').doc(context.rootState.user.currentUser.uid).onSnapshot((snapshot) => {
          let msRefs = snapshot.data().milestones
          let milestones = []
          msRefs.forEach((msRef) => {
            msRef.get().then((msDoc) => {
              // console.log(msDoc.data())
              let taskRefs = msDoc.data().tasks
              let tasks = []
              taskRefs.forEach((taskRef) => {
                taskRef.get().then((taskDoc) => {
                  let task = {...taskDoc.data(), ref: taskRef}
                  tasks.push(task)
                })
              })
              let milestone = {...msDoc.data(), tasks: tasks, ref: msRef}
              milestones.push(milestone)
            })
          })
          context.commit(UPDATE_MILESTONES, milestones)
        })
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