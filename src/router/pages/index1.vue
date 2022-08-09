<script>
import Features from "@/components/features";
import Services from "@/components/services";
// import About from "@/components/about";
// import Pricing from "@/components/pricing";
// import Testimonial from "@/components/testimonial";
// import GetStarted from "@/components/getstarted";
// import Blog from "@/components/blog";
import Contact from "@/components/contact";
// import Footer from "@/layouts/footer";
// import Switcher from "@/components/switcher";

/**
 * Index-1 component
 */

import { get } from "vuex-pathify";
export default {
  computed: {
    token: get("token"),
    isLoading: get("isLoading"),
  },
  components: {
    Features,
    Services,
    // About,
    // Pricing,
    // Testimonial,
    // GetStarted,
    // Blog,
    Contact,
    // Footer,
    // Switcher,
  },

  methods: {
    /**
     * Toggle menu
     */
    onGotoMenu(v) {
      this.$router.push(v);
    },
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    },
  },
};
</script>
<template>
  <div>
    <!-- STRAT NAVBAR -->

    <!-- <nav
      class="
        navbar navbar-expand-lg
        fixed-top
        navbar-white navbar-custom
        sticky sticky-dark
      "
      id="navbar"
    >
      <div class="container">
        <a class="navbar-brand logo text-uppercase" href="/">
          <img
            src="../../assets/images/Logo-LVB-HD.png"
            style="width: 130px"
            class="p-2"
            srcset=""
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMenu()"
        >
          <i class="mdi mdi-menu"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul
            class="navbar-nav navbar-center"
            id="mySidenav"
            v-scroll-spy-active="{ class: 'active' }"
          >
            <li class="nav-item">
              <a
                v-scroll-to="{ el: '#home' }"
                class="nav-link"
                data-scroll-spy-id="home"
                href="/"
              >
                <i class="pe-7s-home text-secondary"></i> ໜ້າຫຼັກ</a
              >
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el: '#features', offset: -65 }"
                class="nav-link"
                data-scroll-spy-id="features"
                href="javascript: void(0);"
              >
                <i class="pe-7s-news-paper text-secondary"></i> ແບບຟອມ</a
              >
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el: '#services', offset: -70 }"
                class="nav-link"
                data-scroll-spy-id="services"
                href="javascript: void(0);"
              >
                <svg style="width: 15px; height: 15px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2M4,4V11H11V4H4M4,20H11V13H4V20M20,20V13H13V20H20M20,4H13V11H20V4Z"
                  />
                </svg>
                ຜະລິດຕະພັນ ແລະ ການບໍລິການ</a
              >
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el: '#contact', offset: -70 }"
                class="nav-link"
                data-scroll-spy-id="contact"
                href="javascript: void(0);"
              >
                <i class="pe-7s-comment"></i> ຕິດຕໍ່ພວກເຮົາ</a
              >
            </li>
            <li class="nav-item" v-if="!token">
              <a class="nav-link" data-scroll-spy-id="contact" href="/signUp2">
                <b-icon-pencil></b-icon-pencil>
                ລົງທະບຽນຜູ້ໃຊ້
              </a>
            </li>
            <li class="nav-item" v-if="token">
              <a
                class="nav-link"
                data-scroll-spy-id="contact"
                href="javascript: void(0);"
              >
                <b-icon-person></b-icon-person>
                ຂໍ້ມູນບັນຊີ {{ token }}
              </a>
            </li>
          </ul>
          <div class="nav-button ml-auto">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <button
                  type="button"
                  class="btn btn-primary btn-sm navbar-btn btn-rounded"
                  @click="submit"
                >
                  ເຂົ້າສູ່ລະບົບ
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav> -->
    <!-- END NAVBAR -->
    <div v-scroll-spy>
      <!--START HOME-->
      <!-- <section
        class="section bg-home home-half"
        id="home"
        style="background-size: cover; background-position: center"
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-white text-center">
              <h4 class="home-small-title">ທະນາຄານຮ່ວມທຸລະກິດ ລາວຫວຽດ ຈຳກັດ</h4>
              <h2 class="home-title">
                ພວກເຮົາຍິນດີໃຫ້ບໍລິການທ່ານ ໃນທຸກໆການບໍລິການຂອງ LaoVietBank
              </h2>
              <p class="play-shadow margin-l-r-auto">
                <a v-b-modal.modal class="play-btn video-play-icon">
                  <i class="mdi mdi-play text-center"></i>
                </a>
                <b-modal
                  id="modal"
                  hide-footer
                  size="lg"
                  centered
                  header-close-variant="white"
                >
                  <youtube
                    video-id="lG0Ys-2d4MA"
                    ref="youtube"
                    width="900"
                    height="500"
                  ></youtube>
                </b-modal>
              </p>
            </div>
          </div>
        </div>
      </section> -->
      <!--END HOME-->

      <!--START WEBSITE-DESCRIPTION-->
      <br />
      <br />
      <br />
      <section
        class="section_banner bg-web-desc mt-2"
        :style="{
          'background-size': 'cover',
          'background-position': 'center',
        }"
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h3 class="text-white">
                {{ $t("Home.Welcome") }}
              </h3>
              <p class="padding-t-15 home-desc mx-auto">
                {{ $t("Home.Welcome1") }}
              </p>
              <a
                @click="onGotoMenu('/form-online')"
                class="btn btn-bg-white margin-t-30"
              >
                <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                  />
                </svg>
                {{ $t("Home.RegisterForm") }}</a
              >
            </div>
          </div>
        </div>
      </section>
      <!--END WEBSITE-DESCRIPTION-->

      <section class="section-sm bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img
                  src="@/assets/images/advertisement/digibank.png"
                  alt="logo-img"
                  class="mx-auto img-fluid d-block"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="client-images my-3 my-md-0">
                <img
                  src="@/assets/images/advertisement/business2.png"
                  alt="logo-img"
                  class="mx-auto img-fluid d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Services />
      <!-- <About /> -->
      <!-- <Pricing /> -->
      <!-- <Testimonial /> -->
      <!-- <GetStarted /> -->
      <!-- <Blog /> -->
      <Contact />
      <!-- <Footer /> -->
      <!-- <Switcher /> -->
    </div>
  </div>
</template>



<style scoped>
::v-deep .modal-content {
  background-color: #000000;
  color: white;
  background: none;
  border: none;
}
::v-deep .modal-header {
  border: none;
}
::v-deep .modal-backdrop {
  opacity: 0.5;
}
</style>