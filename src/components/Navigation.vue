<template>
  <div id="navigation">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'Home'}">Onward!</router-link>
      </li>
      <li class="nav-item ml-auto">
        <router-link class="nav-link" :to="{name: 'Home'}">Home</router-link>
      </li>
      <li class="nav-item" v-if="!currentUser">
        <router-link class="nav-link" :to="{name: 'Auth'}">Login/Sign-Up</router-link>
      </li>
      <li class="nav-item" v-if="currentUser">
        <router-link class="nav-link" :to="{name: 'Dashboard'}">Dashboard</router-link>
      </li>
      <li class="nav-item" v-if="currentUser">
        <router-link class="nav-link" :to="{name: 'Milestone'}">Milestones</router-link>
      </li>

      <li class="nav-item dropdown" v-if="currentUser">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Dropdown</a>
        <div class="dropdown-menu">
          <router-link :to="{name: 'Profile'}" class="dropdown-item">Profile</router-link>
          <a class="dropdown-item" @click="logoutUser">Logout</a>
        </div>
      </li>

    </ul>


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
