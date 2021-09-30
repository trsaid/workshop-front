import { createApp } from 'vue'
import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            isLoggedIn: false,
            user: {
                firstname: null,
                lastname: null,
                email: null,
            },
        };
    },
    mutations: {
        SET_LOGGED(state, status) {
            state.isLoggedIn = status;
        },
    },
    actions: {
        setLogged({ commit }, status) {
            commit("SET_LOGGED", status);
        },
    },

    getters: {
        isLoggedIn: state => state.isLoggedIn,
        getUser: state => state.user,
    },
});
