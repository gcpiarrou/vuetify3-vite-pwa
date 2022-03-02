const Home 				= () => import('Views/Router.vue');
const Welcome 			= () => import('Views/Welcome.vue');
const Users 			= () => import('Views/Router.vue');
const NotFound 			= () => import('Views/Router.vue');
const WindowData 		= () => import('Views/WindowData.vue');
const MobileTest 		= () => import('Views/MobileTest.vue');
const Testing 			= () => import('Views/Router.vue');

export default [

	{
		path: '/home/',
		name: 'home',
		component: Home,
		meta: {
			text:'Home',
			parentText:'Home',
			icon:'fas fa-home',
			visibleInDrawer:false
		},
		children: [
			{
				path: 'welcome',
				component: Welcome,
				name: 'home-welcome',
				meta: {
					text:'Welcome',
					icon:'fas fa-sun',
					visibleInDrawer:true
				},
			}
		]
	},

	{
		path: '/testing/',
		name: 'testing',
		component: Testing,
		meta: {
			text:'Index',
			parentText:'Testing',
			icon:'fas fa-vial',
			visibleInDrawer:false
		},
		children: [
			{
				path: "window-data",
				name: "window-data",
				component: WindowData,
				meta: {
					text:'Window data',
					parentText:'Desktop Testing',
					icon:'fas fa-desktop',
					visibleInDrawer:true
				},
			},
			{
				path: "mobile-test",
				name: "mobile-test",
				component: MobileTest,
				meta: {
					text:'Permissions',
					parentText:'Mobile testing',
					icon:'fas fa-mobile-alt',
					visibleInDrawer:true
				},
			},
		]
	},
	

	{
		path: "/logout",
		name: "logout",
		component: Home,
		meta: {
			text:'Logout',
			icon:'power-off',
			visibleInDrawer:false
		},
	},

	{
		path: "/:catchAll(.*)",
		component: NotFound,
	},
];