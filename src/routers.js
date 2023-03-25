import HomeCmp from '../src/components/HomeCmp.vue'
import SignUp from '../src/components/SignUp.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: HomeCmp,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;