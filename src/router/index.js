import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Callback from '../views/Callback.vue'

const routes = [ 
    { path: '/', component: Home }, 
    { path: '/callback', component: Callback }
]

const router = createRouter({ 
    history: createWebHistory(),
    routes,
})

export default router