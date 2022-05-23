import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import AboutView from '../views/AboutView.vue'
import UserView from '../views/UserView.vue'
import Login from '../views/Login.vue'
import GameView from '../views/GameView.vue'
const routes = [{
        path: '/',
        name: 'index',
        component: IndexView,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/user',
        name: 'user',
        component: UserView,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            keepAlive: false
        }

    },
    {
        path: '/game',
        name: 'game',
        component: GameView,
        meta: {
            keepAlive: false
        }

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router