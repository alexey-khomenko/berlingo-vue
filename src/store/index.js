import {createStore} from 'vuex';
import router from '/src/router';

export default createStore({
    state: {
        auth: false,
    },
    mutations: {
        auth(state, payload) {
            state.auth = payload;
        },
    },
    actions: {
        login(context, fields) {
            // todo login
            console.log(fields);

            setTimeout(() => {
                context.commit('auth', true);
            }, 15000);
        },
        logout(context) {
            context.commit('auth', false);
            router.push({ name: 'Index'});
        },
    },
    getters: {
        getAuth: (state) => {
            return state.auth;
        },
    },
    modules: {},
});
