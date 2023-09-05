<!--<template>-->
<!--  <div>-->
<!--    <Navbar></Navbar>-->
<!--    <div style="min-height: 57.6vh">-->
<!--      <router-view ></router-view>-->
<!--    </div>-->
<!--    <Footer></Footer>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--const Navbar = () => import("@/layouts/navbar.vue");-->
<!--const Footer = () => import("@/layouts/footer.vue");-->

<!--export default {-->
<!--  components: {-->
<!--    Navbar,-->
<!--    Footer,-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->




<!--</style>-->


<template>
    <div>
        <Navbar />
        <div :style="{ minHeight: `${viewportHeight * 0.8}px` }">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/layouts/navbar.vue'
import Footer from '@/layouts/footer.vue'

export default {
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            viewportHeight: window.innerHeight
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.viewportHeight = window.innerHeight
        }
    }
}
</script>
