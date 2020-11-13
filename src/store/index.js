import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		list: []
	},
	mutations: {
		ADD_TO_LIST(state, name) {
			state.list.push(name);
		}
	},
	actions: {},
	modules: {}
})
