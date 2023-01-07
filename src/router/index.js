import { createRouter, createWebHistory } from "vue-router";
import Add from "../components/student/Add.vue";
import Edit from "../components/student/Edit.vue";
import List from "../components/student/List.vue";
import View from "../components/student/View.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/add",
    name: "ADD",
    component: Add,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/view/:id",
    name: "View",
    component: View,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});
export default router;
