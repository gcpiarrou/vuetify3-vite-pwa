const Home 				= () => import('Views/Router.vue');

export default [
	{
		path: "/logout",
		name: "logout",
		component: Home,
		meta: {
			parentText:'Auth',
			text:'Logout',
			icon:'fas fa-power-off',
			visibleInDrawer:true
		},
	}
];