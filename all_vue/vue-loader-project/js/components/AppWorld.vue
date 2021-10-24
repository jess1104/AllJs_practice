<template>
  <span>World</span>
</template>

<script>
module.exports = {
  data() {
    return {
      last: "Wu",
      name: "Jess",
    };
  },
  mounted() {
    console.log("Hello World");
  },
};
</script>

<style scoped>
span {
  background-color: yellow;
}
</style>
