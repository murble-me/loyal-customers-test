import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/day1",
      name: "day1",
      component: () => import("../views/Day1.vue"),
    },
    {
      path: "/day2",
      name: "day2",
      component: () => import("../views/Day2.vue"),
    },
    {
      path: "/loyal",
      name: "loyal",
      component: () => import("../views/Loyal.vue"),
    },
  ],
});

export default router;
