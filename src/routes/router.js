import routes from 'routes'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: routes.index
        }
    ]
})

export default router