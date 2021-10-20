import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    myName: "Jess",
    todos: [1, 2, 3],
  },
  getters: {
    newName: (state) => {
      return state.myName + " Wu";
    },
    nickName: (state) => {
      return state.myName + " Watson";
    },
    anotherName: (state, getters) => {
      return getters.nickName;
    },
  },
  mutations: {
    increment(state, payload) {
      console.log(payload);
      state.count += payload.amount;
    },
    decrement(state) {
      state.count--;
    },
    // 更動state的值所以後面那個參數value就是新的值
    setTodos(state, value) {
      state.todos = value;
    },
  },
  actions: {
    loadTodos(context) {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
        console.log(res.data);
        context.commit("setTodos", res.data);
      });
    },
  },
  modules: {},
});
