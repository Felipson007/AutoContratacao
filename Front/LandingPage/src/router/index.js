import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/pages/LandingPage.vue';
import PostList from '@/pages/PostList.vue';
import PostDetail from '@/pages/PostDetail.vue';
import PostEditor from '@/pages/PostEditor.vue';
import Login from '@/pages/Login.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/blog',
    name: 'PostList',
    component: PostList,
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetail,
  },
  {
    path: '/editor',
    name: 'PostEditor',
    component: PostEditor,
  },
  {
    path: '/editor/:id',
    name: 'EditPost',
    component: PostEditor,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
