import { createStore } from 'vuex'

export default createStore({
    state: {
        a: "1",
        name: "",
        pwd: "",
        count: 0
    },
    getters: {},
    mutations: {
        setValue(state, name, pwd) {
            state.name = name;
            state.pwd = pwd;
        },
        setCount(state, count) {
            state.count = count;
        }
    },
    actions: {},
    modules: {}
})