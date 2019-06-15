<template>
  <div id="dashboard">
    <h1 class="display-4 mt-5" style="text-align: center;">Dashboard</h1>
    <div style="text-align: center">
      <p style="display: inline-block; margin: 20px;">Level {{level}} </p>
        <div class="progress" style="width: 75%; height: 30px; display: inline-block;">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="height: 100%" :style="{width: profile.xp + '%'}">{{profile.xp}}%</div>
        </div>
      <p style="display: inline-block; margin-left: 20px">Level {{level + 1}}</p>
      <h4>Welcome back {{profile.firstName + " " + profile.lastName}}!</h4>
    </div>
    <p>Current Milestones: </p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "Dashboard",
    data() {
      return {
        xp: 0,
        level: 1,
        name: "Daniel"
      }
    },
    computed: {
      ...mapState('user', {
        profile: state => state.userProfile
      }),
    }
  }
</script>

<style scoped>

</style>