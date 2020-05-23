import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        page: 1,
        isShow: false,
        searchShow: false
    },
    getters: {
        getPage: state => {
            return state.page
        }
    },
    mutations: {
        setPage(state, page){
            state.page = page
        }
    }
});

export default store;