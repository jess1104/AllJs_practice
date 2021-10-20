<template>
  <div class="hello">
    <h1>{{ newName }}</h1>
    <p>you can call me {{ anotherName }}</p>
    <p>{{ count }}</p>
    <p>
      <button @click="increment({ amount: 10, name: 'Jess' })">+</button>
      <button @click="decrement">-</button>
    </p>
    <h2>{{ $store.state.todos }}</h2>
    <h3 v-for="todo in todos" :key="todo">{{ todo }}</h3>
    <button @click="setTodos(['amy', 'jess', 'tom'])">增加todos</button>
    <button @click="setTodos()">更新todos</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    // newName() {
    //   return this.$store.getters.newName;
    // },
    // anotherName() {
    //   return this.$store.getters.anotherName;
    // },
    ...mapGetters(["newName", "anotherName"]),
    // count() {
    //   return this.$store.state.count;
    // },
    // 使用mapStata 就可直接使用todos取代$store.state.todos
    ...mapState(["todos", "count"]),
  },
  mounted() {
    this.setTodos(["a", "b", "c"]);
  },
  methods: {
    decrement() {
      this.$store.commit("decrement");
    },
    // increment() {
    //   this.$store.commit("increment", { amount: 10, name: "Jess" });
    // },
    ...mapMutations(["setTodos", "increment"]),
    ...mapActions(["loadTodos"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
