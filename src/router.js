import { createRouter, createWebHistory } from "vue-router";
import Register from "./pages/register";
import Survey from "./pages/survey";

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
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
