import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import AboutView from '../views/AboutView.vue'
import UserView from '../views/UserView.vue'

const routes = [{
        path: '/',
        name: 'index',
        component: IndexView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/user',
        name: 'user',
        component: UserView
    },
    {
        path: '/login',
        name: 'Login',
        component:()=>import('../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router