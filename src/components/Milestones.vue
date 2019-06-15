<template>
  <div id="milestones">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h1 class="display-4 text-center mt-5">Milestones</h1>
          <div class="mt-4 mb-4 text-center">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="jumbotron jumbo-example text-left" v-for="ms in milestones">
            <h1 class="mb-4">{{ms.title}}</h1>
            <hr>
          </div>
        </div>
      </div>
      <router-link class="btn btn-primary btn-lg" :to="{name: 'MilestoneForm'}" role="button">Add Milestone
      </router-link>
    </div>
  </div>
</template>

<script>
  import fb from '../fb'
  import {mapMutations, mapState} from "vuex";
  import {UPDATE_MILESTONES} from "../store/mutationsTypes";

  export default {
    name: "Milestones",
    data() {
      return {
        title: 'Test Milestone',
        tasks: [
          {
            title: ''
          }
        ]
      }
    },
    computed: {

      ...mapState('user', {
        currentUser: state => state.currentUser,
      }),
      ...mapState('milestones', {
        milestones: state => state.milestones,
      })
    },
    methods: {

      ...mapMutations('milestones', {
        updateMilestones: UPDATE_MILESTONES,
      })
    },
    created() {
      fb.db.collection('users').doc(this.currentUser.uid).onSnapshot((snapshot) => {
        let msRefs = snapshot.data().milestones
        let milestones = []
        msRefs.forEach((msRef) => {
          msRef.get().then((msDoc) => {
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
        this.updateMilestones(milestones)
      })
    }
  }
</script>

<style scoped>

</style>