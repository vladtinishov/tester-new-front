import { CreateTest } from "./create-test";
import { Auth } from "./login/auth";
import { Main } from "./main";
import { Test } from "./test";

export const routes = [
  { path: '/login', component: Auth, name: 'auth' },
  { path: '/', component: Main, name: 'main' },
  { path: '/create', component: CreateTest, name: 'create' },
  { path: '/:name', component: Test, name: 'test' },
];

export { default as Routing } from './index.vue'