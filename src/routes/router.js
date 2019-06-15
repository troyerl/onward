import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'
import Home from '../components/Home'
import Auth from '../components/Auth'
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import Milestones from "../components/Milestones";
import MilestonesForm from "../components/MilestonesForm";

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
      path: '/user/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/user/milestones',
      name: 'Milestone',
      component: Milestones
    },
    {
      path: '/user/milestones-form',
      name: 'MilestoneForm',
      component: MilestonesForm
    }
  ]
})

export default router