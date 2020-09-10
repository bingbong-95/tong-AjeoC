import Vue from 'vue'
import VueRouter from 'vue-router';
import DashboardLayout from 'src/layout/DashboardLayout.vue';
Vue.use(RoVueRouteruter)

let routes = [{
        path: '/',
        redirect: '/main',
    },
    {
        path: '/main1',
        name: 'main1',
        component: DashboardLayout,
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});


export default router;