<template>
    <div class="register">
        <div class="wrapper">
            <img style="width: 100px;" src="../assets/resto-logo.jpg">
            <h2>LogIn</h2>
            <input type="email" placeholder="Enter Email" v-model="email">
            <input type="password" placeholder="Enter Password" v-model="password">
            <button @click="logIn">Login</button>
            <div class="formFooter">
                <p>Don't have an account?</p>
                <p>
                    <RouterLink to="/signup">SignUp</RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async logIn() {

            // `http://localhost:3000/users?email=demo@gmail.com&password=demo@123`
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            // console.warn(result)
            // If length of data is more than 0 and status is 200 then redirecting user to home page and storing value in localStorage
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'Home' })
            }
        }
    },
    // Restricting user to go back to login/Signup page after loggedIn
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style></style>