<template>
  <div>
    <AlertModal></AlertModal>
    <loading
      :active.sync="loading"
      :can-cancel="true"
      :is-full-page="true"
      :loader="'dots'"
      :width="45"
      :height="45"
      :color="'#1565c0'"
    ></loading>
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
const AlertModal = () => import("@/components/Modal/index.vue");

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { get } from "vuex-pathify";
export default {
  components: {
    Loading,
    AlertModal,
  },
  computed: {
    loading: get("loading"),
  },
  mounted() {
    // this.$i18n.locale = "la";
    if (localStorage.getItem("lang")) {
      let lang = localStorage.getItem("lang");
      this.$store.set("lang", lang);
      this.$i18n.locale = lang;
    }
  },
};
</script>
