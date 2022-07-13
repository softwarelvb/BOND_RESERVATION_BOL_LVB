
<template>
  <div class="bg-account-pages py-4 py-sm-0">
    <div class="account-home-btn d-none d-sm-block">
      <a href="/" class="text-white">
        <i class="mdi mdi-home h1"></i>
      </a>
    </div>

    <section class="height-100vh">
      <div class="display-table">
        <div class="display-table-cell">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="card account-card">
                  <div class="card-body">
                    <div class="text-center mt-3">
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
                          <span style="font-size: 16px">
                            ທະນາຄານຮ່ວມທຸລະກິດ ລາວຫວຽດ ຈຳກັດ
                          </span>
                        </a>
                      </h3>
                      <p class="text-muted">ເຂົ້າສູ່ລະບົບ ສ້າງແບບຟອມ Online</p>
                    </div>
                    <div class="p-3">
                      <form>
                        <div class="form-group">
                          <label for="username">ອີເມວ</label>
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="ກະລຸນາປ້ອນອີເມວ"
                          />
                        </div>

                        <div class="form-group">
                          <label for="userpassword">ລະຫັດຜ່ານ</label>
                          <input
                            type="password"
                            class="form-control"
                            id="userpassword"
                            placeholder="ກະລຸນາປ້ອນລະຫັດຜ່ານ"
                          />
                        </div>

                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customControlInline"
                          />
                          <label
                            class="custom-control-label"
                            for="customControlInline"
                            >ບັນທຶກອີເມວຂອງທ່ານ</label
                          >
                        </div>

                        <div class="mt-3">
                          <button
                            type="submit"
                            class="btn btn-primary btn-block"
                          >
                            ເຂົ້າສູ່ລະບົບ
                          </button>
                        </div>

                        <div class="mt-4 mb-0 text-center">
                          <router-link
                            tag="a"
                            to="/password_forgot"
                            class="text-dark"
                          >
                            <i class="mdi mdi-lock"></i> ທ່ານລືມລະຫັດຜ່ານຂອງທ່ານ
                            ຫຼື ບໍ່?
                          </router-link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- end card -->
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </section>
    <!-- end account-pages  -->
  </div>
</template>
<script>
/**
 * Login component
 */
export default {
  name: "Login",
};
</script>
