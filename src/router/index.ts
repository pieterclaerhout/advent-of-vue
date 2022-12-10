import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/day1",
      name: "day1",
      component: () => import("../views/day1/Day1View.vue"),
    },
    {
      path: "/day2",
      name: "day2",
      component: () => import("../views/day2/Day2View.vue"),
    },
    {
      path: "/day3",
      name: "day3",
      component: () => import("../views/day3/Day3View.vue"),
    },
    {
      path: "/day4",
      name: "day4",
      component: () => import("../views/day4/Day4View.vue"),
    },
    {
      path: "/day5",
      name: "day5",
      component: () => import("../views/day5/Day5View.vue"),
    },
  ],
});

export default router;
