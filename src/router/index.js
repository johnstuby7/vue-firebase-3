import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginPage.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
