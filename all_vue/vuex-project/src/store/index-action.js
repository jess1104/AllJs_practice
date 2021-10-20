// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     // state 裡面的 Loaded 預設為 false ，在 axios 成功 get 到 user api 的之後，再更改為 true
//     Loaded: false,
//   },
//   actions: {
//     GetUser(context) {
//       axios
//         .get("https://randomuser.me/api/")
//         .then(function(response) {
//           console.log(response);
//           console.log(context);
//           // 在 actions 裡面，可以用 context.commit 來呼叫 mutations，
//           // 也可以用 context.dispatch 來呼叫另外一個 actions。
//           context.commit("MyMutations");
//           context.dispatch("AnotherActions");
//         })
//         .catch(function(error) {
//           console.log(error);
//         });
//     },
//     AnotherActions() {
//       console.log("Another Actions run!");
//     },
//   },
//   mutations: {
//     MyMutations(state) {
//       console.log("MyMutations run!");
//       // 抓到user之後，將state的loaded改為true
//       state.Loaded = true;
//     },
//     SetFalse(state) {
//       state.Loaded = false;
//     },
//   },
// });
