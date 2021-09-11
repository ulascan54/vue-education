import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import addNewTodo from "../views/AddNewTodo.vue";
import updateTodo from "../views/updateTodo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-new-todo",
    name: "addNewTodo",
    component: addNewTodo,
  },
  {
    path: "/update-todo/:id",
    name: "updateTodo",
    component: updateTodo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
