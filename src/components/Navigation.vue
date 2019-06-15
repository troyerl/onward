<template>
  <div id="navigation">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'Home'}">Onward!</router-link>
      </li>
      <li class="nav-item ml-auto">
        <router-link class="nav-link" href="#" :to="{name: 'Home'}">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'Auth'}">Login/Sign-Up</router-link>
      </li>
    </ul>


  </div>
</template>

<script>
  import {mapstate} from 'vuex'

  export default {
    /*computed: {
      ...mapstate(['currentUser'])
    }*/
  }
</script>
