<script>
/**
 * Signup component
 */ import Footer from "@/components/footer";
export default {
  name: "Signup",
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
  },
  components: {
    Footer,
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    },
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    },
  },
};
</script>

<template>
  <div>
    <nav
      class="
        navbar navbar-expand-lg
        fixed-top
        navbar-white navbar-custom
        sticky sticky-dark
      "
      id="navbar"
    >
      <div class="container">
        <!-- LOGO -->
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
                class="nav-link"
                data-scroll-spy-id="home"
                href="/"
              >
                <i class="pe-7s-home text-secondary"></i> ໜ້າຫຼັກ</a
              >
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el: '#features', offset: -5 }"
                class="nav-link"
                data-scroll-spy-id="features"
                href="javascript: void(0);"
              >
                <i class="pe-7s-news-paper text-secondary"></i> ແບບຟອມ</a
              >
            </li>
            <li class="nav-item">
              <a
                v-scroll-to="{ el: '#services', offset: -5 }"
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
                v-scroll-to="{ el: '#contact' }"
                class="nav-link"
                data-scroll-spy-id="contact"
                href="javascript: void(0);"
              >
                <i class="pe-7s-comment"></i> ຕິດຕໍ່ພວກເຮົາ</a
              >
            </li>
          </ul>
          <div class="nav-button ml-auto">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <button
                  type="button"
                  class="btn btn-primary btn-sm navbar-btn btn-rounded"
                >
                  ເຂົ້າສູ່ລະບົບ
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="py-4 mt-2 py-sm-0">
      <div class="account-home-btn d-none d-sm-block">
        <a href="/" class="text-white">
          <i class="mdi mdi-home h1"></i>
        </a>
      </div>
      <section
        class="height-100vh"
        :style="windowWidth < 770 ? 'height: 100%' : ''"
      >
        <div class="display-table">
          <div class="display-table-cell">
            <div class="container">
              <!-- <div class="row justify-content-center"> -->
              <!--    <div class="col-lg-10 mt-2 mb-2"> -->
              <div class="account-card">
                <div class="card-body">
                  <div class="text-center mt-1">
                    <h3 class="font-weight-bold">
                      <a
                        href="/"
                        class="text-dark text-uppercase account-pages-logo"
                      >
                        <br />
                        <span style="font-size: 16px">
                          ລົງທະບຽນຜູ້ໃຊ້ ລະບົບສ້າງແບບຟອມອອນໄລ
                        </span>
                      </a>
                    </h3>
                    <p class="text-muted">
                      ລົງທະບຽນຜູ້ໃຊ້ ລະບົບສ້າງແບບຟອມອອນໄລ
                    </p>
                  </div>
                  <div class="pl-3 pb-3 pr-3">
                    <form>
                      <b-row>
                        <b-col sm="12" lg="4" md="4">
                          <label for="firstname">ຊື່ ແລະ ນາມສະກຸນ</label>
                          <input
                            type="text"
                            class="form-control"
                            id="firstname"
                            placeholder="ກະລຸນາປ້ອນຊື່ ແລະ ນາມສະກຸນ"
                        /></b-col>
                        <b-col sm="12" lg="8" md="8">
                          <label for="email">ທີ່ຢູ່ຂອງທ່ານ</label>
                          <input
                            type="password"
                            class="form-control"
                            id="email"
                            placeholder="ກະລຸນາປ້ອນອີເມວ"
                        /></b-col>
                      </b-row>
                      <b-row>
                        <b-col sm="12" lg="4" md="4">
                          <label for="email">ອີເມວ</label>
                          <input
                            type="password"
                            class="form-control"
                            id="email"
                            placeholder="ກະລຸນາປ້ອນອີເມວ"
                        /></b-col>
                        <b-col sm="12" lg="4" md="4">
                          <label for="userpassword">ລະຫັດຜ່ານ</label>
                          <input
                            type="password"
                            class="form-control"
                            id="userpassword"
                            placeholder="ກະລຸນາປ້ອນລະຫັດຜ່ານ "
                          />
                        </b-col>
                        <b-col sm="12" lg="4" md="4">
                          <label for="userpassword">ຢືນຢັນລະຫັດຜ່ານ</label>
                          <input
                            type="password"
                            class="form-control"
                            id="userpassword"
                            placeholder="ກະລູນາຢືນຢັນລະຫັດຜ່ານ "
                          />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col sm="12" lg="4" md="4">
                          <label for="userpassword">ເລືອກປະເພດລູກຄ້າ</label>
                          <input
                            type="password"
                            class="form-control"
                            id="userpassword"
                            placeholder="ກະລູນາຢືນຢັນລະຫັດຜ່ານ "
                          />
                        </b-col>
                      </b-row>
                      <div class="mt-1">
                        <button type="submit" class="btn btn-custom btn-block">
                          ລົງທະບຽນ
                        </button>
                      </div>
                      <div class="mt-4 mb-0 text-center">
                        <p class="mb-0">
                          ທ່ານມີບັນຊີແລ້ວບໍ ?
                          <router-link tag="a" to="/login" class="text-danger"
                            >ເຂົ້າສູ່ລະບົບ</router-link
                          >
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- </div> -->
                <!-- end card -->
              </div>
              <!-- end col -->
              <!-- </div> -->
              <!-- end row -->
            </div>
          </div>
        </div>
      </section>
      <!-- end account-pages  -->
    </div>
    <Footer />
  </div>
</template>