import Vue from 'vue'
import Vuex from 'vuex'
import pathify from "./pathify"
import {
	make
} from 'vuex-pathify'

import createPersistedState from 'vuex-persistedstate'

const state = {
	token: ""
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