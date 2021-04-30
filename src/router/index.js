import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index'),
        meta: {
            title: 'Акция - Berlingo',
        },
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('../views/Account'),
        meta: {
            title: 'Профиль - Berlingo',
        },
    },
    {
        path: '/winners',
        name: 'Winners',
        component: () => import('../views/Winners'),
        meta: {
            title: 'Победители - Berlingo',
        },
    },
    {
        path: '/pens',
        name: 'Pens',
        component: () => import('../views/Pens'),
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
