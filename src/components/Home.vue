<template>
  <div id="home">
  <div class="jumbotron">
    <h1 class="display-4 text-right">ONWARD!</h1>
    <p class="lead home-info text-right">Simple app to stay on track</p>
    <p class="home-info2 text-right">TEMP</p>
    <router-link class="btn btn-primary btn-lg home-btn" :to="{name: 'Auth'}" role="button">Login/SignUp</router-link>
  </div>
    <div>
      <h2>Future features</h2>
      <h4>
        <ul>
          <li>Preset milestones that allow for starting progress</li>
          <li>DOB inclusion: different older age groups have access to more/ different preset milestones</li>
          <li>Recurring milestones based on date: Do taxes... ect</li>
          <li>Data set integration from key words.  Add resources to milestones to help goal achievement</li>
        </ul>
      </h4>

    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        authLinks: ['Login', 'Sign Up']
      }
    }
  }
</script>
