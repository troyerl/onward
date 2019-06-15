<template>
  <div id="home">
  <div class="jumbotron text-center " style="margin-top: 0.000001%">
    <h1 class="display-3 home-title">ONWARD!</h1>
    <router-link class="btn btn-danger btn-lg home-btn" :to="{name: 'Auth'}" role="button">Login/SignUp</router-link>
  </div>
    <div>
      <h2 class="display-5 text-center">Future features</h2>
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
