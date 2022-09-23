import { createRouter, createWebHistory } from "vue-router";
import Register from "./pages/register";
import Survey from "./pages/survey";

const routes = [
  {
    path: "/register",
    name: "register",
    component: Register,
    props: true,
  },
  {
    path: "/survey",
    name: "register.survey",
    component: Survey,
    props: true,
    beforeEnter: (to, from, next) => {
      console.log(from.name);
      if (from.name === "register") {
        next();
      } else {
        next({ name: "register" });
      }
    },
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
