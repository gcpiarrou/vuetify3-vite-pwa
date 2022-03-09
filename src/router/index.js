import { createWebHashHistory, createRouter } from "@/vue-router";

import base 		  from './base';
import testing 		from './testing';
import auth 		  from './auth';
import cooking 		  from './cooking';

const routes = [
  ...base,
  ...cooking,
  ...testing,
  //...auth
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;