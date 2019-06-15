<template>
  <div id="home">
    <div class="jumbotron">
<<<<<<< HEAD
      <h1 class="display-4 home-h1">ONWARD!</h1>
      <p class="lead home-info">Simple app to stay on track</p>
      <hr class="my-4 home-line">
      <p class="home-info2">TEMP</p>
      <router-link class="btn btn-primary btn-lg home-btn" :to="{name: 'Auth'}" role="button" >Login/SignUp</router-link>
=======
      <h1 class="display-4">ONWARD!</h1>
      <p class="lead">Simple app to stay on track</p>
      <hr class="my-4">
      <p>TEMP</p>
      <router-link class="btn btn-primary btn-lg" :to="{name: 'Auth'}" role="button" v-for="link in authLinks">{{link}}</router-link>
>>>>>>> 4663d38e808c472050df86fffcf73118fefe6b35
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