import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import AboutView from '../views/AboutView.vue'
import UserView from '../views/UserView.vue'
import Login from '../views/Login.vue'
import Game2048View from '../views/Game2048View.vue'
import Register from '../views/Register.vue'
import Snake from '../views/Snake.vue'
const routes = [{
        path: '/',
        name: 'index',
        component: IndexView,
        meta: {
            keepAlive: true,
            userinfo: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
            keepAlive: true,
            userinfo: true
        }
    },
    {
        path: '/user',
        name: 'user',
        component: UserView,
        meta: {
            keepAlive: true,
            userinfo: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            keepAlive: false,
            userinfo: false
        }

    },
    {
        path: '/game2048',
        name: 'game2048',
        component: Game2048View,
        meta: {
            keepAlive: false,
            userinfo: true
        }

    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            keepAlive: false,
            userinfo: false
        }

    },
    {
        path: '/snake',
        name: 'snake',
        component: Snake,
        meta: {
            keepAlive: false,
            userinfo: true
        }

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router