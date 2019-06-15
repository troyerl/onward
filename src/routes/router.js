import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'
import Home from '../components/Home'
import Auth from '../components/Auth'
import Dashboard from "../components/Dashboard/Dashboard";

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
        }
    ]
})

export default router