import Vue from 'vue'
import Vuex from 'vuex'
import pathify from "./pathify"
import {
	make
} from 'vuex-pathify'

import createPersistedState from 'vuex-persistedstate'

const state = {
	token: "",
	session: "",
	lang: 'la',
	loading: false,
	modalAlert: null,
	confirmModal: false,
	step: 1,
	registerData: null,
}


Vue.use(Vuex)
const mutations = make.mutations(state);
export default new Vuex.Store({
	state,
	mutations,
	plugins: [
		pathify.plugin, createPersistedState({
			key: 'LVBEform',
			storage: window.sessionStorage
		})
	]
})