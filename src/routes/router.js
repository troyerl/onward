import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
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
      component: Auth,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/user/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/dashboard/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const routeIsLogin = to.matched.some(x => x.path === '/auth')
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (routeIsLogin && currentUser){
    next('dashboard')
  } else {
    next()
  }
})

export default router
