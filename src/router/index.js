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
    scrollBehavior(to) {
        let y = 0;
        const wrapper = document.querySelector('.wrapper-outer');

        if (to.hash) {
            const el = document.querySelector(`[data-anchor="${to.hash}"`);

            if (el) {
                y = el.getBoundingClientRect().top + pageYOffset - 5;
            }
        }

        wrapper.scrollTo(0, y);

        // todo scroll
        // return {
        //     selector: to.hash,
        //     offset: {x: 0, y: 10},
        // };
        // return {
        //     selector: '.wrapper-outer',
        //     offset: {x: 0, y: 0},
        // };
    },
});

router.beforeEach((to, from, next) => {
    document.title = to?.meta.title;
    next();
});

export default router;
