import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Auth from '../components/Auth'
import Dashboard from "../components/Dashboard/Dashboard";
import Profile from "../components/Dashboard/Profile";
import Milestones from "../components/Dashboard/Milestones";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/user/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/user/dashboard/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/user/dashboard/milestones',
      name: 'Milestone',
      component: Milestones
    }
  ]
})

export default router