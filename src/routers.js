import HomeCmp from '../src/components/HomeCmp.vue'
import SignUp from '../src/components/SignUp.vue'
import LogIn from '../src/components/LogIn.vue'

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
    {
        name: 'LogIn',
        component: LogIn,
        path: '/login'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;