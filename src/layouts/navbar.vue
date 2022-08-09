<script>
/**
 * Navbar component
 */

const ChangeLanguages = () => import("@/components/changeLanguages.vue");
const ModalConfirm = () => import("@/components/Modal/modalConfirm.vue");

import { get } from "vuex-pathify";
export default {
  data: () => ({
    modalAlert: {
      state: false,
      text: "",
      icon: "",
      type: "",
    },
  }),
  computed: {
    token: get("token"),
    confirm: get("confirmModal"),
  },
  mounted() {
    this.$store.set("confirmModal", false);
  },
  components: {
    ChangeLanguages,
    ModalConfirm,
  },
  methods: {
    onCloseMenu() {
      this.toggleMenu();
    },
    Logout() {
      this.toggleMenu();
      this.$store.set("modalAlert", {
        state: true,
        text: "ok",
        icon: "warning",
        type: "confirm",
      });
    },
    onConfirmLogout(v) {
      if (v) {
        this.$store.set("session", null);
        this.$store.set("token", null);
        this.$store.set("modalAlert", null);
        this.$vs.notification({
          duration: "2000",
          progress: "auto",
          color: "success",
          position: "top-right",
          title: this.$t("Notification.Success"),
          text: this.$t("Notification.LogoutSuccess"),
        });
        if (this.$route.path !== "/") {
          this.$router.push("/");
        }
      }
    },
    onGotoMenu(v) {
      this.$router.push(v);
      this.toggleMenu();
    },
    submit() {
      this.isLoading();

      setTimeout(() => {
        this.isLoading(true);
      }, 2000);
    },
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    },
  },
};
</script>
<template>
  <!-- STRAT NAVBAR -->
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
      <a
        class="navbar-brand logo text-upspercase"
        style="cursor: pointer"
        @click="onGotoMenu('/')"
      >
        <img
          src="@/assets/images/Logo-LVB-HD.png"
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
        <ul class="navbar-nav navbar-center ml-auto" id="mySidenav">
          <li class="nav-item">
            <a
              class="nav-link"
              data-scroll-spy-id="home"
              @click="onGotoMenu('/')"
              style="cursor: pointer"
            >
              <i class="pe-7s-home text-secondary"></i> {{ $t("navBar.Home") }}
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="onGotoMenu('form-online')"
              style="cursor: pointer"
            >
              <i class="pe-7s-news-paper text-secondary"></i>
              {{ $t("navBar.Form") }}
            </a>
          </li>
          <!-- <li class="nav-item">
            <a
              class="nav-link"
              @click="onGotoMenu('bank-services')"
              style="cursor: pointer"
            >
              <svg style="width: 15px; height: 15px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2M4,4V11H11V4H4M4,20H11V13H4V20M20,20V13H13V20H20M20,4H13V11H20V4Z"
                />
              </svg>
              ຜະລິດຕະພັນ ແລະ ການບໍລິການ</a
            >
          </li> -->
          <li class="nav-item">
            <a
              class="nav-link"
              style="cursor: pointer"
              @click="onGotoMenu('/contact-bank')"
            >
              <i class="pe-7s-comment"></i> {{ $t("navBar.ContactUs") }}
            </a>
          </li>
          <li class="nav-item" v-if="!token">
            <a
              class="nav-link"
              style="cursor: pointer"
              @click="onGotoMenu('/signup')"
            >
              <b-icon-pencil></b-icon-pencil>
              {{ $t("navBar.Register") }}
            </a>
          </li>
          <li class="nav-item" v-if="token">
            <a class="nav-link" href="javascript: void(0);">
              <b-icon-person></b-icon-person>
              ຂໍ້ມູນບັນຊີ
            </a>
          </li>
        </ul>
        <div class="nav-button ml-auto">
          <ul class="nav navbar-nav">
            <li>
              <vs-button v-if="!token" @click="onGotoMenu('/login')">
                {{ $t("navBar.Login") }}
              </vs-button>
              <vs-button danger v-else @click="Logout">
                {{ $t("navBar.Logout") }}
              </vs-button>
            </li>
          </ul>
        </div>
        <ChangeLanguages @toggleMenu="onCloseMenu"></ChangeLanguages>
        <ModalConfirm @onConfirm="onConfirmLogout"></ModalConfirm>
      </div>
    </div>
  </nav>
  <!-- END NAVBAR -->
</template>
