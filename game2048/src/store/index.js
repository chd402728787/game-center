import { createStore } from 'vuex'

export default createStore({
    state: {
        isLogin: false,
        name: "",
        pwd: "",
        count2048: 0,
        countSnake: 0,
        score2048: 0,
        scoreAll2048: 0,
        scoreSnake: 0,
        scoreMaxSnake: 0,
        scoreMax2048: 0,
    },
    getters: {},
    mutations: {
        setLogin(state, isLogin) {
            state.isLogin = isLogin;
        },
        setValue(state, name, pwd) {
            state.name = name;
            state.pwd = pwd;
        },
        setCount(state, count2048, countSnake) {
            state.count2048 = count2048;
            state.countSnake = countSnake;
        },
        setScore(state, scoreSnake, scoreAll2048) {
            state.scoreSnake += scoreSnake;
            state.scoreAll2048 += scoreAll2048;
        },
        set2048Score(state, score2048) {
            state.score2048 += score2048;
        },
        setMaxScore(state, scoreMaxSnake, scoreMax2048) {
            state.scoreMaxSnake = scoreMaxSnake;
            state.scoreMax2048 = scoreMax2048;
        }
    },
    actions: {},
    modules: {}
})