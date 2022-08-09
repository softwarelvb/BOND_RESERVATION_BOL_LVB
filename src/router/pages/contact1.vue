<template>
  <div id="app">
    <div id="longlist" class="some-long-list">
      <ul>
        ...
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: null,
    };
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      console.log(event);
      console.log("metallica");
    },
  },
  mounted() {
    this.list = document.getElementById("longlist");
    this.list.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    this.list.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.some-long-list {
  background: red;
  width: 300px;
  margin: 0px auto;
  overflow: auto;
  height: 100%;
}
</style>