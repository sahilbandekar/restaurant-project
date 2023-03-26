<template>
    <HeaDer />
    <h1>Hello User, Welcome to Home Page</h1>
</template>


<script>

import HeaDer from './HeaDer.vue';

export default {
    name: 'HomeCmp',
    components: {
        HeaDer
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>

<style></style>