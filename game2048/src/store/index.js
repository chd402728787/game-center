import { createStore } from 'vuex'

export default createStore({
<<<<<<< HEAD
  state: {
    a:"1",
    name:"",
    pwd:""
  },
  getters: {
  },
  mutations: {
    setValue(state,name,pwd){
      state.name = name;
      state.pwd=pwd;
    }
  },
  actions: {
  },
  modules: {
  }
})
=======
    state: {
        a: "1"
    },
    getters: {},
    mutations: {
        setValue(state, a) {
            state.a = a;
        }
    },
    actions: {},
    modules: {}
})
>>>>>>> 5718744 (更新”)
