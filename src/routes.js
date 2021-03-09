// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import NotifyPage from '@/pages/NotifyPage'

// routering
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/NotifyPage',
            name: 'notifyPage',
            component: NotifyPage
        }
        ,
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})

