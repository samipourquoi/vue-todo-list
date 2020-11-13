import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		list: []
	},
	mutations: {
		ADD_TO_LIST(name) {
			this.state.list.push(name);
		}
	},
	actions: {},
	modules: {}
})
