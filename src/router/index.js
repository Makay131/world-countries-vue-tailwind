import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Learning from "../views/Learning.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/learning",
    name: "Learning",
    component: Learning,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
