import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [1, 2, 3],
  },
  mutations: {
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
