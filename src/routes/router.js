import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home.vue'
import Carrinho from '@/pages/Carrinho.vue'
import FinalizarCompra from '@/pages/FinalizarCompra.vue'


const routes = [
    {
        path:'/',
        component:Home,
        name: Home
    },
    {
        path:'/carrinho',
        component:Carrinho,
        name: Carrinho

    },
    {
        path:'/finalizar',
        component:FinalizarCompra,
        name:FinalizarCompra
    }

];

const router = new VueRouter({
    routes
});

export default router;