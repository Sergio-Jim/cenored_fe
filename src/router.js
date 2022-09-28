import { createRouter, createWebHistory } from "vue-router";
import Register from "./pages/register";
import Survey from "./pages/survey";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

const routes = [
  {
    path: "/",
    name: "register",
    component: Register,
    props: true,
  },
  {
    path: "/survey",
    name: "register.survey",
    component: Survey,
    props: true,
  },

  //dashboard
  {
    path: "/login",
    name: "login",
    component: Login,
    props: true,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    props: true,
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
