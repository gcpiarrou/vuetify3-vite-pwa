const WindowData 		= () => import('Views/Test/WindowData.vue');
const MiscTest 			= () => import('Views/Test/Misc.vue');
const ToastsTest 		= () => import('Views/Test/Toasts.vue');
const Notification		= () => import('Views/Test/Notification.vue');
const Router 			= () => import('Views/Router.vue');

export default [

	{
		path: '/testing/',
		name: 'testing',
		component: Router,
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
	}
	
];