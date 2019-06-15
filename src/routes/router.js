import routes from 'routes'

import Home from '../components/Home'

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