import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: 'Акция - Berlingo',
        },
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('../views/Account.vue'),
        meta: {
            title: 'Профиль - Berlingo',
        },
    },
    {
        path: '/winners',
        name: 'Winners',
        component: () => import('../views/Winners.vue'),
        meta: {
            title: 'Победители - Berlingo',
        },
    },
    {
        path: '/pens',
        name: 'Pens',
        component: () => import('../views/Pens.vue'),
        meta: {
            title: 'О ручках - Berlingo',
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        // todo scroll to top, after transition
        document.querySelector('.wrapper-outer').scrollTo(0,0);
    },
});

router.beforeEach((to, from, next) => {
    document.title = to?.meta.title;
    next();
});

export default router;
