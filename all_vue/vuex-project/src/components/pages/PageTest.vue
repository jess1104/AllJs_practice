<template>
  <div class="page-test">
    // state 的 Loaded
    <p>random user api Loaded: {{ userLoaded }}</p>
    // Reload API
    <button @click="Reload">Reload</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // 1.  頁面讀取完成時，吃 randomuser API
    this.$store.dispatch("GetUser");
  },
  computed: {
    // 2. 將 state 中的 Loaded 用 computed 抓出來給 userLoaded 做使用
    userLoaded() {
      return this.$store.state.Loaded;
    },
  },
  methods: {
    // 3. Reload 按鈕按下去的時候，把 state 的 Loaded 改回 false，然後再執行一次 GetUser 這個 actions
    Reload() {
      this.$store.commit("SetFalse");
      this.$store.dispatch("GetUser");
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
