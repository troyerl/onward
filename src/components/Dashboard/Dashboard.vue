<template>
  <div id="dashboard">
    <p class="test">Dashboard</p>
    <div>
      <p>Level {{level}}</p>
      <p>{{profile.firstName}}</p>
      <div class="levelBar">

      </div>
      <p>Level {{level + 1}}</p>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "Dashboard",
    data() {
      return {
        xp: 0,
        level: 1
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