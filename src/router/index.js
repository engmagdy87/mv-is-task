import VueRouter from 'vue-router';
import Home from '@/views/containers/Home.vue';

export const routes = [
    { path: '/', name: 'home-en', component: Home, props: { routeLang: "en" } },
    { path: '/sp', name: 'home-sp', component: Home, props: { routeLang: "sp" } },
    { path: '*', component: Home, props: { routeLang: "en" } }
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
