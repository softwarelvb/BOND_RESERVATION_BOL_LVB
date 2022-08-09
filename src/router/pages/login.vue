
<template>
  <div class="bg-account-pages py-4 py-sm-0 text-white">
    <div class="account-home-btn d-none d-sm-block">
      <a @click="onGotoMenu('/')" style="cursor: pointer" class="text-white">
        <i class="mdi mdi-home h1"></i>
      </a>
    </div>

    <section class="height-100vh">
      <div class="display-table">
        <div class="display-table-cell">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="card-body">
                  <div class="text-center mt-3">
                    <h3 class="font-weight-bold">
                      <a
                        @click="onGotoMenu('/')"
                        style="cursor: pointer"
                        class="text-dark text-uppercase account-pages-logo"
                      >
                        <img
                          src="../../assets/images/LOGOWHITE.png"
                          style="width: 230px"
                          class="p-2"
                          srcset=""
                        />
                        <br />
                        <span style="font-size: 16px" class="text-white">
                          {{ $t("Login.HeaderLVB") }}
                        </span>
                      </a>
                    </h3>
                    <p class="text-white">{{ $t("Login.Header") }}</p>
                  </div>
                  <div class="p-3">
                    <form>
                      <div class="form-group">
                        <label for="username">{{ $t("Login.Email") }} </label>
                        <b-form-input
                          type="email"
                          class="form-control"
                          id="username"
                          v-validate="'required|email'"
                          v-model="inputEmail"
                          :placeholder="$t(`Login.Email`)"
                        />
                        <span class="text-danger validate-message">{{
                          errors.first("email")
                            ? $t(`Register.PleaseEnterCollectEmail`)
                            : ""
                        }}</span>
                      </div>

                      <div class="form-group">
                        <label for="userpassword">{{
                          $t("Login.Password")
                        }}</label>
                        <b-form-input
                          type="password"
                          class="form-control"
                          id="userpassword"
                          v-validate="{
                            required: true,
                            min: 8,
                            regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).*$/,
                          }"
                          v-model="inputPassword"
                          :placeholder="$t(`Login.PleaseEnterPassword`)"
                        />
                        <span class="text-danger validate-message">{{
                          errors.first("inputPassword")
                            ? $t(`Register.PleaseEnterCollectPassword`)
                            : ""
                        }}</span>
                      </div>

                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="onSaveEmail"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        {{ $t("Login.Save") }}
                      </b-form-checkbox>

                      <div class="mt-3">
                        <b-button
                          @click="onDoLogin"
                          class="btn bg-white btn-block text-secondary"
                        >
                          {{ $t("Login.Login") }}
                        </b-button>
                      </div>

                      <div class="mt-4 mb-0 text-center">
                        <router-link
                          tag="a"
                          to="/password_forgot"
                          class="text-white"
                        >
                          <i class="mdi mdi-lock"></i>
                          {{ $t("Login.ForgotPassword") }}
                        </router-link>
                      </div>
                    </form>
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
import RestApi from "@/API/RestApi";

export default {
  name: "Login",
  data() {
    return {
      inputEmail: "",
      inputPassword: "",
      onSaveEmail: "not_accepted",
      loading: null,
      localStorageEmail: null,
      session: null,
    };
  },
  mounted() {
    if (localStorage.getItem("loginEmail")) {
      this.localStorageEmail = localStorage.getItem("loginEmail");
      this.inputEmail = localStorage.getItem("loginEmail");
    }
    this.$store.set("session", null);
    this.$store.set("token", null);
  },
  methods: {
    async onDoLogin() {
      if (
        this.inputEmail != null &&
        this.inputEmail != "" &&
        this.inputPassword != null &&
        this.inputPassword != "" &&
        this.inputPassword.length >= 8
      ) {
        if (this.onSaveEmail != "not_accepted") {
          localStorage.setItem("loginEmail", this.inputEmail);
        } else {
          localStorage.setItem("loginEmail", "");
        }
        let req = {
          email: this.inputEmail,
          password: this.inputPassword,
        };
        RestApi.doLogin(req)
          .then((res) => {
            if (res && res.data.error_code == "00") {
              this.$vs.notification({
                duration: "1500",
                progress: "auto",
                color: "success",
                position: "top-right",
                title: this.$t("Notification.Success"),
                text: this.$t("Notification.LoginSuccess"),
              });
              const token = res.data.data.auth_token;
              const session = res.data.data;
              console.log(session);
              this.session = session;
              this.$store.set("token", token);
              this.$store.set("session", session);
              if (session) {
                this.$router.replace("/");
              }
            } else {
              this.$store.set("modalAlert", {
                state: true,
                text: res.data.error_desc,
                icon: "warning",
                type: "alert",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            this.$store.set("modalAlert", {
              state: true,
              text: err,
              icon: "warning",
              type: "alert",
            });
          });
      } else {
        this.$store.set("modalAlert", {
          state: true,
          text: this.$t("Modal.PleaseEnterEmailAndPassword"),
          icon: "warning",
          type: "alert",
        });
        return;
      }

      //   let req;
      //   this.loading = this.$vs.loading({
      //     text: this.$t("Loading.text"),
      //     color: "#1976d2",
      //   });
      //   RestApi.doRegister(req)
      //     .then((res) => {
      //       console.log(res);
      //       this.loading.close();
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       this.loading.close();
      //     });

      //   this.$vs.dialog({
      //     type: "confirm",
      //     color: "warning",
      //     title: "New Part",
      //     text: "Are you sure you want to start a new part sequence?",
      //   });
      //   const loading = this.$vs.loading();
      //   setTimeout(() => {
      //     loading.close();
      //   }, 3000);
      //   const isvalid = await this.$validator.validate();
      //   console.log(this.errors);
      //   if (!isvalid || this.errors.any()) {
      //     this.$swal.fire({
      //       text: "ກະລຸນາ ປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ",
      //       type: "error",
      //     });
      //     return;
      //   }
    },
    onGotoMenu(v) {
      this.$router.push(v);
    },
  },
};
</script>
