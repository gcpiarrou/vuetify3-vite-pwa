const Home 				= () => import('Views/Router.vue');
const Welcome 			= () => import('Views/Welcome.vue');
const NotFound 			= () => import('Views/Router.vue');
const WindowData 		= () => import('Views/Test/WindowData.vue');
const MiscTest 			= () => import('Views/Test/Misc.vue');
const ToastsTest 		= () => import('Views/Test/Toasts.vue');
const Notification		= () => import('Views/Test/Notification.vue');
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
					icon:'fas fa-home',
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
				path: "toast-test",
				name: "toast-test",
				component: ToastsTest,
				meta: {
					text:'Toasts',
					icon:'fas fa-bread-slice',
					visibleInDrawer:true
				},
			},
			{
				path: "notification-test",
				name: "notification-test",
				component: Notification,
				meta: {
					text:'Notifications',
					icon:'fas fa-bell',
					visibleInDrawer:true
				},
			},
			{
				path: "window-data",
				name: "window-data",
				component: WindowData,
				meta: {
					text:'Window data',
					icon:'fas fa-desktop',
					visibleInDrawer:true
				},
			},
			{
				path: "misc-test",
				name: "misc-test",
				component: MiscTest,
				meta: {
					text:'Misc',
					icon:'fas fa-briefcase',
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