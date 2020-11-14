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
			context.dispatch("saveToStorage");
		},
		saveToStorage(context) {
			window.localStorage.setItem("list", JSON.stringify(context.state.list));
			window.localStorage.setItem("id", context.state.id);
		},
		loadFromStorage(context) {
			let list = window.localStorage.getItem("list");
			let id = window.localStorage.getItem("id");
			if (list) context.state.list = JSON.parse(list);
			if (id) context.state.id = parseInt(id);
		}
	},
	modules: {}
})
