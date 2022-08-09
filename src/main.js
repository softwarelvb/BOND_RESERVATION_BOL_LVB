import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Scrollspy from 'vue2-scrollspy';

import axios from "axios";
import interceptors from "./API/axios.interceptor"

import mixin from "./mixin";
import {
	BootstrapVue,
	BootstrapVueIcons
} from 'bootstrap-vue'
import VueYoutube from 'vue-youtube'
import VueParticles from 'vue-particles'
import store from "./stores/store";

import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin
Vue.use(Loading);


// vuesax
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
	// options here
})
import 'boxicons';

//languages
import {
	i18n
} from "@/lang/translator"


//country Flag
import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)



//validate
import * as VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


//sweet alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);


/* import the fontawesome core */
import {
	library
} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {
	FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
	faAddressBook,
	faBell,
	faCircleCheck,
	faClipboardList,
	faDownload,
	faEnvelopeCircleCheck,
	faExclamation,
	faListSquares,
	faMoneyBillTransfer,
	faPenToSquare,
	faSquareFull
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faAddressBook, faSquareFull, faListSquares, faExclamation, faBell, faMoneyBillTransfer, faPenToSquare, faDownload, faClipboardList, faEnvelopeCircleCheck, faCircleCheck)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

interceptors()
var VueScrollTo = require('vue-scrollto');
Vue.use(VueParticles)
Vue.use(VueYoutube)
Vue.use(VueScrollTo)
Vue.mixin(mixin);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)

Vue.use(Scrollspy);
Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "$axios", {
	value: axios
});
new Vue({
	router,
	store,
	i18n,
	Vuesax,
	render: h => h(App)
}).$mount("#app");