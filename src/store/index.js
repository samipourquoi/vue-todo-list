import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		list: [],
		id: 0
	},
	mutations: {
		APPEND_TO_LIST(state, payload) {
			state.list.push(payload);
		},
		UPDATE_ID(state) {
			state.id++;
		}
	},
	actions: {
		addToList(context, name) {
			let data = {
				name: name,
				checked: false,
				id: context.state.id
			}
			context.commit("UPDATE_ID");
			context.commit("APPEND_TO_LIST", data);
		}
	},
	modules: {}
})
