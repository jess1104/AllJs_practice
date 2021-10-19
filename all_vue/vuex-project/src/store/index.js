import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
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
