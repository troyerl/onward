<template>
  <div id="auth">
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <div class="jumbotron">
            <form @submit.prevent>
              <h1 class="text-center mb-4">Your Information</h1>
              <div class="form-group">
                <input v-model="profile.firstName" type="first" class="form-control" id="exampleInputFirstName1"
                       placeholder="First Name">
              </div>
              <div class="form-group">
                <input v-model="profile.lastName" type="last" class="form-control" id="exampleInputLastName1"
                       placeholder="Last Name">
              </div>
              <div class="form-group">
                <input v-model="profile.email" type="email" class="form-control" id="exampleInputEmail1"
                       placeholder="Email">
              </div>
              <div class="form-group">
                <input v-model="profile.dob" type="dob" class="form-control" id="exampleInputDOB1"
                       placeholder="Date of Birth">
              </div>
              <button type="submit" @click="save" class="btn btn-primary">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Profile",
    data() {
      return {
        userData: {
          first: this.profile.firstName,
          last: this.profile.lastName,
          email: this.profile.email,
          dob: this.profile.dob
        }
      }
    },
    methods: {
      save() {

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