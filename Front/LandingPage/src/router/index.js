// Altere o import no seu arquivo `router/index.js` para não usar `default`
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/pages/LandingPage.vue';
import BlogPage from '@/pages/BlogPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: BlogPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
