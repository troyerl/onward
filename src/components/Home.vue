<template>
  <div id="home">
    <div class="jumbotron">
      <h1 class="display-4">ONWARD!</h1>
      <p class="lead">Simple app to stay on track</p>
      <hr class="my-4">
      <p>TEMP</p>
      <a class="btn btn-primary btn-lg" @click="toAuth" role="button">Login</a>
      <a class="btn btn-primary btn-lg" @click="toAuth" role="button">Sign Up</a>
    </div>

  </div>
</template>

<script>
    import routes from '../routes/routes'

  export default {
      methods: {
          toAuth(){
              this.$router.push(routes.auth)
          }
      }
  }
</script>