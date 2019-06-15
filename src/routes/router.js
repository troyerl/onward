import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'
import Home from '../components/Home'
import Auth from '../components/Auth'
import Dashboard from "../components/Dashboard/Dashboard";
import Profile from "../components/Dashboard/Profile";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: routes.index
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
    }
  ]
})

export default router