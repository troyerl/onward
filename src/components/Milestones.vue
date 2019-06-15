<template>
  <div id="milestones">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="display-4 text-center mt-5">Milestones</h1>
          <div class="mt-4 mb-4 text-center">
            <router-link class="btn btn-primary btn-lg" :to="{name: 'MilestoneForm'}" role="button">Add Milestone
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="jumbotron jumbo-example">
            <h1 class="text-center mb-4">Example: Get a Job</h1>
            <hr>
            <div class="example-group">
              <div>
                <ul>
                  <li v-for="ms in milestones">
                    {{ms.title}}
                    <ul>
                      <li v-for="task in ms.tasks">{{task.title}}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                tasks.push(taskDoc.data())
              })
            })
            let milestone = {...msDoc.data(), tasks: tasks}
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