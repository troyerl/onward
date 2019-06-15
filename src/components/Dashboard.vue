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
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: "Dashboard",
    data() {
      return {
      }
    },
    computed: {
      ...mapState('user', {
        profile: state => state.userProfile,
        currentMS: state => state.currentMS,
      }),
    },
    methods: {

      ...mapActions('milestones', [
              'completeTask'
      ])
    }
  }
</script>

<style scoped>

</style>