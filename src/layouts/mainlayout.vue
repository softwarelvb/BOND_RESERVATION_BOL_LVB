<template>
  <div>
    <Navbar></Navbar>
    <div style="min-height: 57.6vh">
      <router-view ></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
const Navbar = () => import("@/layouts/navbar.vue");
const Footer = () => import("@/layouts/footer.vue");

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>




</style>