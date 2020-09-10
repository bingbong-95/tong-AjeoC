import Vue from 'vue'
import VueRouter from 'vue-router';
import DashboardLayout from './layout/DashboardLayout.vue';
Vue.use(VueRouter)

let routes = [{
    path: '/',
    name: 'main1',
    component: DashboardLayout,
}, ]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});


export default router;