import {createStore} from 'vuex';
import router from '/src/router';
import {authLogin} from '/src/api/modal-auth-login';

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
        async login(context, fields) {
            const result = await authLogin(fields.email, fields.password)

            if (result === '+') {
                context.commit('auth', true);
            }

            return result;
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
