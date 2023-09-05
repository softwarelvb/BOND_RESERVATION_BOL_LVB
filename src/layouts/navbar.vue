<script>
/**
 * Navbar component
 */

import {get} from "vuex-pathify";

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
            this.$router.push(v).catch((e) => {
            });
            this.toggleMenu();
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
            <div class="collapse navbar-collapse " id="navbarCollapse">
                <ul class="navbar-nav mr-auto" id="mySidenav">
                    <li class="nav-item">
                        <a class="nav-link" data-scroll-spy-id="home" @click="onGotoMenu('/')">
                            <i class="pe-7s-home text-secondary"></i> {{ $t("navBar.Home") }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="onGotoMenu('create-form')">
                            <i class="pe-7s-news-paper text-secondary"></i> {{ $t("navBar.Form") }}
                        </a>
                    </li>
                    <li class="nav-item" v-if="!token">
                        <a class="nav-link" @click="onGotoMenu('/contact-bank')">
                            <i class="pe-7s-comment"></i> {{ $t("navBar.ContactUs") }}
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    <!-- END NAVBAR -->
</template>
<style>
/* Apply padding-left: 16% on larger screens */
@media (min-width: 768px) {
    #mySidenav {
        padding-left: 19%;
    }
}

.navbar-nav li.nav-item a.nav-link:hover {
    cursor: pointer;
}
</style>
