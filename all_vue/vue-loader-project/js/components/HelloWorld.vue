<script>
module.exports = {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  render(createElement) {
    // createElement(tag,{},text)
    return createElement("h1", {}, "Hello World");
  },
};
</script>
