import { createRouter, createWebHistory } from 'vue-router'
import type { Route } from '../interfaces/interface'

import Home from '../layout/Home.vue'
import Course from '../views/ComponentsCourse/Course.vue';
import Blog from '../views/ComponentsBlog/Blog.vue';
import AboutUs from '../views/ComponentsAboutUs/AboutUs.vue';
import DedicatedCourse from '../views/PageDedicatedCourse/DedicatedCourse.vue';

// Simulação de autenticação
function isAuthenticated(): boolean {
  return !!localStorage.getItem("token"); // Retorna true se houver um token salvo
}

const routes: Route[] = [
  { path: "/", component: Home },
  { path: "/Course", component: Course },
  { path: "/Blog", component: Blog },
  { path: "/AboutUs", component: AboutUs },
  { path: "/DedicatedCourse", component: DedicatedCourse },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Proteção de rotas
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/login"); // Redireciona para login se não estiver autenticado
  } else {
    next(); // Continua normalmente
  }
});

export default router;