import {createStore} from 'vuex';

export default createStore({
    state: {
        auth: false,
    },
    mutations: {
        login(state, payload) {
            state.auth = payload;
        },
    },
    actions: {
        login(context, fields) {

            console.log(fields);

            setTimeout(() => {
                context.commit('login', true);
            }, 15000);
        },
    },
    getters: {
        getAuth: (state) => {
            return state.auth;
        },
    },
    modules: {},
});
