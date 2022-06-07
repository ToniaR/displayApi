import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [{
    path: '',
    name: 'home',
    component: Home
}]


export const router = createRouter({
    history: createWebHashHistory(),
    routes
});