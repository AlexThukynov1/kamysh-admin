import { createMemoryHistory, createRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import kamClientsPage from '../pages/kam-clients-page.vue';
import kamHomePage from '../pages/kam-home-page.vue';
import kamItemsPage from '../pages/kam-items-page.vue';
import kamOrdersPage from '../pages/kam-orders-page.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: kamHomePage
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: kamItemsPage
    },
    {
        path: '/orders',
        name: 'Orders',
        component: kamOrdersPage
    },
    {
        path: '/clients',
        name: 'Clients',
        component: kamClientsPage
    },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })