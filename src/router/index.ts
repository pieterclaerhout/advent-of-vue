import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    children: [],
  },
];

for (let i = 1; i <= 13; i++) {
  const children: RouteRecordRaw[] = [
    {
      path: "",
      name: `day${i}`,
      component: () => import(`../views/day${i}/Day${i}View.vue`),
    },
  ];
  if (i === 10) {
    children.push(
      ...[
        {
          path: `clue2`,
          name: `day${i}-clue2`,
          component: () => import(`../views/day10/Day10Clue2View.vue`),
        },
        {
          path: `clue3`,
          name: `day${i}-clue3`,
          component: () => import(`../views/day10/Day10Clue3View.vue`),
        },
        {
          path: `whoami`,
          name: `day${i}-whoami`,
          component: () => import(`../views/day10/Day10WhoAmIView.vue`),
        },
      ]
    );
  }
  routes.push({
    path: `/day${i}`,
    children: children,
  });
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export const navigationRoutes: (string | undefined)[] = routes
  .map((route) => route.children?.find((child) => child.path === ""))
  .filter((route) => route !== undefined && route.name !== undefined)
  .map((route) => route?.name?.toString());

export default router;
