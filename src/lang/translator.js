import Vue from "vue"
import VueI18n from 'vue-i18n';
import messages from '../lang/index';
Vue.use(VueI18n);
export const i18n = new VueI18n({
	locale: 'la',
	fallbackLocale: 'la',
	messages,
});