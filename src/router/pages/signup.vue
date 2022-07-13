<script>
/**
 * Signup component
 */
export default {
  name: "Signup",
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
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
  },
};
</script>

<template>
  <div class="bg-account-pages py-4 py-sm-0">
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
            <div class="card m-2 account-card">
              <div class="card-body">
                <div class="text-center mt-1">
                  <h3 class="font-weight-bold">
                    <a
                      href="/"
                      class="text-dark text-uppercase account-pages-logo"
                    >
                      <img
                        src="../../assets/images/Logo-LVB-HD.png"
                        style="width: 230px"
                        class="p-2"
                        srcset=""
                      />
                      <br />
                      <span style="font-size: 15px">
                        ທະນາຄານຮ່ວມທຸລະກິດ ລາວຫວຽດ ຈຳກັດ
                      </span>
                    </a>
                  </h3>
                  <p class="text-muted">ລົງທະບຽນຜູ້ໃຊ້ ລະບົບສ້າງແບບຟອມອອນໄລ</p>
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
</template>