import HomeCmp from '../src/components/HomeCmp.vue'
import SignUp from '../src/components/SignUp.vue'
import LogIn from '../src/components/LogIn.vue'
import AddRest from '../src/components/AddRest.vue'
import UpdateRest from '../src/components/UpdateRest.vue'

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
    {
        name: 'AddRest',
        component: AddRest,
        path: '/add'
    },
    {
        name: 'UpdateRest',
        component: UpdateRest,
        path: '/update/:id'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;