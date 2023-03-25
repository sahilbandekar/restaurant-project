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
                <p>Login</p>
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
            if (result.status == 201){
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name: 'Home'})
            }
            // console.log(this.name, this.email, this.password)
            // console.warn(result)
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style></style>