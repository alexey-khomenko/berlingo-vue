import {createRouter, createWebHistory} from 'vue-router';
import store from '/src/store';

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
    scrollBehavior(to) {
        let y = 0;
        const wrapper = document.querySelector('.wrapper-outer');

        if (to.hash) {
            const el = document.querySelector(`[data-anchor="${to.hash}"`);

            if (el) {
                y = el.getBoundingClientRect().top + pageYOffset - 5;
            }
        }

        wrapper.scrollTo({top: y, behavior: 'smooth'});
    },
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.getAuth;

    if (to.name === 'Account' && !isAuthenticated) {
        document.title = routes.filter((route) => route.name === 'Index')[0]?.meta.title;
        next({name: 'Index'});
    }
    else {
        document.title = to?.meta.title;
        next();
    }
});

export default router;
