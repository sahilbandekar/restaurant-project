<template>
    <HeaDer />
    <h1>Hello User, Welcome to Add Restaurant Page</h1>
</template>


<script>

import HeaDer from './HeaDer.vue';

export default {
    name: 'AddRest',
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