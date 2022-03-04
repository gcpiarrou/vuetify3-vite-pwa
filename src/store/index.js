import { createStore } from 'vuex';
import { useMediaQuery, useStorage } from '@vueuse/core'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

var isDark = useStorage('isDark', isPreferredDark);
	
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
				isOpen: isLargeScreen
			},
			app:{
				isDark: isDark,
				name: 'Cooking app'
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
		},
		setTheme(state, data) {
			state.app.isDark = data;
			isDark = data;
		}
	}


});

export default store;