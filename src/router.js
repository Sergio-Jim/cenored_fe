import { createRouter, createWebHistory } from "vue-router";
import Register from "./pages/register";
import Survey from "./pages/survey";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import General from "./components/dashboard/general.vue";
import Settings from "./components/dashboard/settings.vue";
import axios from "axios";

let headers = {
  "Content-Type": "application/json",
};

function setToken() {
  if (localStorage.getItem("token")) {
    headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    };
  }
}

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
    beforeEnter: (to, from, next) => {
      setToken();
      if (localStorage.getItem("token") !== null) {
        axios({
          method: "GET",
          headers,
          url:
            process.env.NODE_ENV == "production"
              ? "https://dolphin-app-ewqob.ondigitalocean.app"
              : "http://localhost:4000",
        })
          .then((res) => {
            if (res.data.success) next();
            next({ name: "login" });
          })
          .catch((err) => {
            console.log(err, "something is wrong");
            throw err;
          });
      } else {
        next({ name: "login" });
      }
    },
    component: Dashboard,
    props: true,
    children: [
      {
        path: "",
        component: General,
      },
      {
        path: "general",
        component: General,
      },
      {
        path: "settings",
        component: Settings,
      },
    ],
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
