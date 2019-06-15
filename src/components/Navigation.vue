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

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Dropdown</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Link 1</a>
          <a class="dropdown-item" href="#">Link 2</a>
          <a class="dropdown-item" href="#">Link 3</a>
        </div>
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
