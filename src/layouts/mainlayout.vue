<template>
  <div>
    <Navbar></Navbar>
    <div v-scroll-spy>
      <router-view></router-view>
      <Footer></Footer>
    </div>
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

<style>
</style>