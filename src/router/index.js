import { createRouter, createWebHistory } from "vue-router";



const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../views/Favorites.vue"),
  },
  {
    path: "/movie/:id",
    name: "MovieDetailPage",
    component: () => import("../views/MovieDetailPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});






export default router;
