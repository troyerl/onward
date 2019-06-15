<template>
  <div id="home">
  <div class="jumbotron text-center " style="margin-top: 0.000001%">
    <h1 class="display-3 home-title">ONWARD!</h1>
    <router-link class="btn btn-danger btn-lg home-btn" :to="{name: 'Auth'}" role="button">Login/SignUp</router-link>
  </div>
    <div class="jumbotron text-left " style="margin-top: 0.000001%">
    <!--<div>-->
      <h2 class="display-5 text-left">About this site</h2>
        <ul>
          <li>Using a reward based system dramatically increases a users desire to accomplish tasks </li>
          <li>We designed a re-entry program based off this idea</li>
          <li>Users will create accounts, set milestones, accomplish tasks, and level up</li>
          <li>Resources will become available based off keywords from user created milestones</li>
          <li>We accomplished the challenge by providing users with an interactive way to stay motivated about accomplishing re-entry tasks</li>
          <li>We also supplied users with a searched based resource finder that focuses on just what is near them</li>
        </ul>

      <h2 class="display-5 text-left">Future features</h2>
        <ul>
          <li>Preset milestones that allow for starting progress</li>
          <li>DOB inclusion: different older age groups have access to more/ different preset milestones</li>
          <li>Recurring milestones based on date: Do taxes... ect</li>
          <li>Location based milestone verification that are worth more points</li>
          <li>Integration between milestones and calender programs</li>
        </ul>


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
