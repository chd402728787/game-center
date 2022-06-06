import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "lib-flexible/flexible"
import VueCookies from 'vue-cookies';
const app = createApp(App).use(store).use(router).use(VueCookies).mount('#app');