import { createWebHashHistory, createRouter } from "@/vue-router";

import baseRoutes 		from './baseRoutes';

const routes = [
  ...baseRoutes
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;