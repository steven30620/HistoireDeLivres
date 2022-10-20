import { createStore } from 'vuex';

export default createStore({
	state: {
		return: {
			userData: {},
		},
	},
	getters: {
		getUserData(state) {
			return state.userData;
		},
	},
	mutations: {
		setUserData(state, userData) {
			state.userData = userData;
		},
	},
	actions: {},
	modules: {},
});
