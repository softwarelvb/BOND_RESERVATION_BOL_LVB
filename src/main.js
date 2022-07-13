import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Scrollspy from 'vue2-scrollspy';

import {
	BootstrapVue,
	BootstrapVueIcons
} from 'bootstrap-vue'
import VueYoutube from 'vue-youtube'
import VueParticles from 'vue-particles'
import store from "./stores/store";

// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';
// Vue.component('loading-overlay', Loading)

var VueScrollTo = require('vue-scrollto');
Vue.use(VueParticles)
Vue.use(VueYoutube)
Vue.use(VueScrollTo)

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

Vue.use(Scrollspy);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");