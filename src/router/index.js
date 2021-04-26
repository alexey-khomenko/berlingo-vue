import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('../views/Account.vue'),
    },
    {
        path: '/winners',
        name: 'Winners',
        component: () => import('../views/Winners.vue'),
    },
    {
        path: '/pens',
        name: 'Pens',
        component: () => import('../views/Pens.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
