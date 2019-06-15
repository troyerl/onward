<template>
  <div id="dashboard">
    <h1 class="display-4 my-5">Welcome back {{profile.firstName}}!</h1>
    <div class="border border-dark rounded p-5">
      <p class="text-center">Progress:</p>
      <div class="d-flex align-items-center justify-content-around" style="text-align: center">
        <p class="font-weight-bold text-danger">Level {{profile.level}} </p>
        <div class="progress bg-secondary" style="width: 75%; height: 30px; display: inline-block;">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="height: 100%" :style="{width: profile.xp + '%'}">&nbsp;&nbsp;{{profile.xp}}%</div>
        </div>
        <p class="font-weight-bold text-danger">Level {{profile.level + 1}}</p>
      </div>
    </div>

    <h3 class="mt-5">Current Milestone: </h3>
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
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'

  import Resources from '../components/Resources'
  import fb from '../fb'

  export default {
    name: "Dashboard",
    component: {
      Resources
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState('user', {
        profile: state => state.userProfile,
        currentMS: state => state.currentMS,
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
      }),
      ...mapActions('milestones', [
              'completeTask'
      ])
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