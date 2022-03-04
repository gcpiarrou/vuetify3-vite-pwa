const Router 			= () => import('Views/Router.vue');
const Welcome 			= () => import('Views/Welcome.vue');
const NotFound 			= () => import('Views/NotFound.vue');

export default [

	{ path: '/', redirect: { name: 'home-welcome' } },
	{
		path: '/home/',
		name: 'home',
		component: Router,
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
		path: "/:catchAll(.*)",
		component: NotFound,
	}
];