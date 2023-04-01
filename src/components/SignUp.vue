<template>
    <div class="register">
        <div class="wrapper">
            <img style="width: 100px;" src="../assets/resto-logo.jpg">
            <h2>SignUp</h2>
            <input type="text" placeholder="Enter Name" v-model="name">
            <input type="email" placeholder="Enter Email" v-model="email">
            <input type="password" placeholder="Enter Password" v-model="password">
            <button @click="signUp">Sign Up</button>
            <div class="formFooter">
                <p>Already have an account?</p>
                <p>
                    <RouterLink to="/login">Login</RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });

            // If status is 201 then redirecting user to home page and storing value in localStorage
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({ name: 'Home' })
            }
        }
    },
    // Checking if user is already loggedin or not by having a look at localstorage 
    // if not pushing him back to home page after signup if he is trying to go back to signup 
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style></style>