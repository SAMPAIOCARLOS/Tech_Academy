import { createRouter, createWebHistory } from 'vue-router'
import type { Route } from '../interfaces/interface'

import Home from '../layout/Home.vue'
import Course from '../views/ComponentsCourse/Course.vue';
import Blog from '../views/ComponentsBlog/Blog.vue';
import AboutUs from '../views/ComponentsAboutUs/AboutUs.vue';
import DedicatedCourse from '../views/PageDedicatedCourse/DedicatedCourse.vue';
import PageLogin from '../views/componentsLogin/PageLogin.vue';
import PageRegister from '../views/ComponentsRegister/PageRegister.vue';
import StudentPortal from '../layout/Section_ StudentPortal/StudentPortal.vue';

// Simulação de autenticação
function isAuthenticated(): boolean {
  return !!localStorage.getItem("token"); 
}

const routes: Route[] = [
  { path: "/", component: Home },
  { path: "/Course", component: Course },
  { path: "/Blog", component: Blog },
  { path: "/AboutUs", component: AboutUs },
  { path: "/DedicatedCourse", component: DedicatedCourse },
  { path: "/login", component: PageLogin },
  { path: "/register", component: PageRegister },
  { path: "/StudentPortal", component: StudentPortal },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Proteção de rotas
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/login"); 
  } else {
    next(); 
  }
});

export default router;