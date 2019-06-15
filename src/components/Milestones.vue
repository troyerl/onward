<template>
  <div id="milestones" class="mb-5">
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
            <h3 class="mb-4">{{ms.title}}</h3>
            <hr>
            <div class="accordion" :id="'m' + ms.ref.id | first5">
              <div class="card" v-for="task in ms.tasks" style="cursor: pointer">
                <div class="card-header" id="headingOne" data-toggle="collapse"
                     :data-target="'#t' + task.ref.id | first5">
                  <p class="mb-0 d-flex justify-content-between align-items-center font-weight-bold text-danger">
                    {{task.title}}
                    <span class="badge badge-dark badge-pill">points: {{task.points}}</span>
                  </p>
                </div>
                <Resources :task="task" :ms="ms"></Resources>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-link class="btn btn-outline-danger btn-lg" :to="{name: 'MilestoneForm'}" role="button">Add Milestone
      </router-link>
    </div>
  </div>
</template>

<script>
  import fb from '../fb'
  import {mapMutations, mapState} from "vuex";
  import {UPDATE_CURRENT_MILESTONE, UPDATE_MILESTONES} from "../store/mutationsTypes";
  import Resources from './Resources'

  export default {
    name: "Milestones",
    components: {
      Resources
    },
    filters: {
      first5: (val) => {
        return val.charAt(0) === '#' ? val.substr(0, 6) : val.substr(0, 5)
      }
    },
    data() {
      return {
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
      }),
      ...mapMutations('user', {
        updateCurrentMilestone: UPDATE_CURRENT_MILESTONE,
      })
    },
    created() {
      fb.db.collection('users').doc(this.currentUser.uid).onSnapshot((snapshot) => {
        let msRefs = snapshot.data().milestones
        let milestones = []
        msRefs.forEach((msRef) => {
          msRef.get().then((msDoc) => {
            console.log(msDoc.data())
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
        this.updateCurrentMilestone(milestones[0])
      })
    }
  }
</script>

<style scoped>

</style>