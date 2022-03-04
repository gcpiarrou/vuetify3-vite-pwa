const Router 			= () => import('Views/Router.vue');
const CookingIndex 	    = () => import('Views/Cooking/Index.vue');
const CookingNew 	    = () => import('Views/Cooking/New.vue');
const CookingShow 	    = () => import('Views/Cooking/Show.vue');

export default [

	{
		path: '/cooking/',
		name: 'cooking',
		component: Router,
		meta: {
			parentText:'Cooking',
			visibleInDrawer:false
		},
		children: [
			{
				path: 'index',
				component: CookingIndex,
				name: 'cooking-index',
				meta: {
					text:'Index',
					icon:'fas fa-fire',
					visibleInDrawer:true
				},
			},
			{
				path: 'new',
				component: CookingNew,
				name: 'cooking-new',
				meta: {
					text:'New',
					icon:'fas fa-plus',
					visibleInDrawer:true
				},
			},
			{
				path: 'show/:id',
				component: CookingShow,
				name: 'cooking-show',
				props: true,
				meta: {
					text:'Cooking - Show',
					icon:'fas fa-book-open',
					visibleInDrawer:false
				},
			}
		]
	}
];