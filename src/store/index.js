import { createStore } from 'vuex';

const store = createStore({


	state() {
		return {
			auth: {
				user: {
					username: '',
					mail: ''
				}
			},
			drawer:{
				isOpen: true
			}
		}
	},


	mutations: {
		openDrawer(state){
			state.drawer.isOpen = true
		},
		closeDrawer(state){
			state.drawer.isOpen = false
		},
		toggleDrawer(state) {
			state.drawer.isOpen = !state.drawer.isOpen
		},
		setDrawer(state, data) {
			state.drawer.isOpen = data
		}
	}


});

export default store;