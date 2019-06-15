<template>
  <div id="home">
    <div class="jumbotron">
      <h1 class="display-4">ONWARD!</h1>
      <p class="lead">Simple app to stay on track</p>
      <hr class="my-4">
      <p>TEMP</p>
      <router-link class="btn btn-primary btn-lg" :to="{name: 'Auth'}" role="button">Login</router-link>
      <router-link class="btn btn-primary btn-lg" :to="{name: 'Auth'}" role="button">Sign Up</router-link>
    </div>

  </div>
</template>

<script>
    import routes from '../routes/routes'

  export default {
      data(){
        return{routes,}
      }
  }
</script>