<template>
    <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/add">Add Restaurant</RouterLink>
        <a href="#" @click="logout">Logout</a>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "HeaDer",
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: "LogIn" });
        }
    },
    components: { RouterLink }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background: #ddd;
    color: #333;
}
</style>