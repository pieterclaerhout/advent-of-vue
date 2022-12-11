import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: `/day10/clue2`,
    name: `_day10-clue2`,
    component: () => import(`../views/day10/Day10Clue2View.vue`),
  },
  {
    path: `/day10/clue3`,
    name: `_day10-clue3`,
    component: () => import(`../views/day10/Day10Clue3View.vue`),
  },
  {
    path: `/day10/whoami`,
    name: `_day10-whoami`,
    component: () => import(`../views/day10/Day10WhoAmIView.vue`),
  },
];

for (let i = 1; i <= 10; i++) {
  routes.push({
    path: `/day${i}`,
    name: `day${i}`,
    component: () => import(`../views/day${i}/Day${i}View.vue`),
  });
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
