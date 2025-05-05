import {createMemoryHistory, createRouter} from 'vue-router';
import type {RouteRecordRaw} from 'vue-router';
import kamClientsPage from '../pages/kam-clients-page.vue';
import kamHomePage from '../pages/kam-home-page.vue';
import kamItemsPage from '../pages/kam-items-page.vue';
import kamOrdersPage from '../pages/kam-orders-page.vue';
import kamLoginPage from '../pages/kam-login-page.vue';
import KamAdminPage from '../pages/kam-admin-page.vue';
import {auth} from '../firebase/firebase';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/admin',
    },
    {
        path: '/login',
        name: 'Login',
        component: kamLoginPage
    },
    {
        path: '/admin',
        component: KamAdminPage,
        name: 'Admin',
        meta: {requiresAuth: true},
        children: [
            {
                path: '',
                name: 'Home',
                component: kamHomePage
            },
            {
                path: 'catalog',
                name: 'Catalog',
                component: kamItemsPage
            },
            {
                path: 'orders',
                name: 'Orders',
                component: kamOrdersPage
            },
            {
                path: 'clients',
                name: 'Clients',
                component: kamClientsPage
            },
        ]
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth) {
        const isAuthenticated = checkUserAuthentication();
        if (!isAuthenticated) {
            return '/login';
        }

    }
    return true;
});

function checkUserAuthentication() {
    return sessionStorage.getItem('user') !== null;
}

export default router