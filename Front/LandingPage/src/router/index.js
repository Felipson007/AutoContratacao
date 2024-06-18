import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';
import Blog from '../pages/blog.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
     },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
