import Vue from 'vue'
import Router from 'vue-router'

import home from '../views/home/home'
import introDuce from '../views/inTro/introDuce'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/introDuce',
            name: 'introDuce',
            component: introDuce
        },
    ]
})