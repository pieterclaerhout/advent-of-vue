import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
];

for (let i = 1; i <= 6; i++) {
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
