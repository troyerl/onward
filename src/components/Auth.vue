<template>
  <div id="auth">
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <div class="jumbotron">
            <form @submit.prevent v-if="showLoginForm">
              <h1 class="text-center mb-4">Login</h1>
              <div class="form-group">
                <input v-model="formLogin.email" type="email" class="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input v-model="formLogin.password" type="password" class="form-control" id="exampleInputPassword1"
                       placeholder="Password" required>
              </div>
              <button type="submit" @click="loginUser" class="btn btn-primary">Login</button>
              <div>
                <small>Don't have an account? <a @click="toggleForm" class="text-primary">Create an Account</a></small>
              </div>
            </form>
            <form @submit.prevent v-else>
              <h1 class="text-center mb-4">Sign Up</h1>
              <div class="form-group">
                <input v-model="formSignUp.first" type="text" class="form-control" id="first" placeholder="First Name" required>
              </div>
              <div class="form-group">
                <input v-model="formSignUp.last" type="text" class="form-control" id="last" placeholder="Last Name" required>
              </div>
              <div class="form-group">
                <input v-model="formSignUp.email" type="email" class="form-control" id="email"
                       placeholder="Email (email@domain.com)" required>
              </div>
              <div class="form-group">
                <input v-model="formSignUp.password" type="password" class="form-control" id="password"
                       placeholder="Password" required>
              </div>
              <div class="form-group">
                <input v-model="formSignUp.confirmPassword" type="password" class="form-control" id="confirmPassword"
                       placeholder="Confirm Password">
              </div>
              <button @click="signupUser" type="submit" class="btn btn-primary">Signup</button>
              <div>
                <small>Already have an account? <a @click="toggleForm" class="text-primary">Login</a></small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";

  export default {
    name: "Login",
    data() {
      return {
        formLogin: {
          email: '',
          password: ''
        },
        formSignUp: {
          password: '',
          confirmPassword: '',
          first: '',
          last: '',
          email: '',
          dob: Date.now()
        },
        showLoginForm: true,
        showForgotPassword: false,
        passwordResetSuccess: false,
        performRequest: false,
      }
    },
    computed: {


      ...mapState('user', {
        currentUser: state => state.currentUser,
        profile: state => state.userProfile
      }),
    },
    methods: {
      toggleForm() {
        this.showLoginForm = !this.showLoginForm
      },
      loginUser() {
        this.login({
          email: this.formLogin.email,
          password: this.formLogin.password
        }).then(() => {
          this.$router.push({name: 'Dashboard'})
        }).catch((err) => {
          console.log(err.message)
        })
      },
      signupUser() {
        this.signup({
          email: this.formSignUp.email,
          password: this.formSignUp.password,
          firstName: this.formSignUp.first,
          lastName: this.formSignUp.last,
          dob: this.formSignUp.dob
        }).then(() => {
          this.$router.push({name: 'Dashboard'})
        }).catch((err) => {
          console.log(err.message)
        })
      },

      ...mapActions('user', [
        'login',
        'signup',
        'logout'
      ]),
    }
  }
</script>