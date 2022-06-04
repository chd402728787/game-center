import { createStore } from 'vuex'

export default createStore({
    state: {
        a: "1",
        name: "",
        pwd: ""
    },
    getters: {},
    mutations: {
        setValue(state, name, pwd) {
            state.name = name;
            state.pwd = pwd;
        }
    },
    actions: {},
    modules: {}
})