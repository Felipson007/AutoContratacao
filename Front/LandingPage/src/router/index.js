import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // Outras rotas do seu aplicativo
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
