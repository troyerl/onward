import Vue from 'vue'
import Router from 'vue-router'
import routes from 'routes'

import Home from '../components/Home'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: routes.index
        },
        {
            path: routes.index,
            name: 'Home',
            component: Home
        }
    ]
})

export default router