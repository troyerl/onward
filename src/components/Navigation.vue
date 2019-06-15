<template>
  <div id="navigation">
    <ul class="nav" style="border-bottom">
      <li class="nav-item" >
        <router-link class="nav-link btn-outline-danger" :to="{name: 'Home'}">Onward!</router-link>
      </li>
      <li class="nav-item ml-auto">
        <router-link class="nav-link btn-outline-danger" :to="{name: 'Home'}">Home</router-link>
      </li>
      <li class="nav-item" v-if="!currentUser">
        <router-link class="nav-link btn-outline-danger" :to="{name: 'Auth'}">Login/Sign-Up</router-link>
      </li>
      <li class="nav-item" v-if="currentUser">
        <router-link class="nav-link btn-outline-danger" :to="{name: 'Dashboard'}">Dashboard</router-link>
      </li>
      <li class="nav-item" v-if="currentUser">
        <router-link class="nav-link btn-outline-danger" :to="{name: 'Milestone'}">Milestones</router-link>
      </li>

      <li class="nav-item " v-if="currentUser">
        <a class="nav-link dropdown-toggle btn-outline-danger" data-toggle="dropdown" href="#">Dropdown</a>
        <div class="dropdown-menu">
          <router-link :to="{name: 'Profile'}" class="dropdown-item">Profile</router-link>
          <a class="dropdown-item" @click="logoutUser">Logout</a>
        </div>
      </li>
    </ul>
    <hr style="margin-top: .0001%; margin-bottom: .00001%; color: red">

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState('user', [
        'currentUser'
      ])
    },
    methods: {
      logoutUser() {
        this.logout().then(() => {
          this.$router.push({name: 'Auth'})
        })
      },

      ...mapActions('user', [
        'logout'
      ]),
    }
  }
</script>
