<template>
  <div id="home">
    <div class="jumbotron">
      <h1 class="display-4">ONWARD!</h1>
      <p class="lead home-info">Simple app to stay on track</p>
      <hr class="my-4 home-line">
      <p class="home-info2">TEMP</p>
      <router-link class="btn btn-primary btn-lg home-btn" :to="{name: 'Auth'}" role="button" >Login/SignUp</router-link>

    </div>

  </div>
</template>

<script>
  import routes from '../routes/routes'

  export default {
    data() {
      return {
        routes,
        authLinks: ['Login', 'Sign Up']
      }
    }
  }
</script>