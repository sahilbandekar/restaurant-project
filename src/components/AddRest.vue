<template>
    <HeaDer />
    <h1>Hello {{ this.name }}, Welcome to Add Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" />
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" />
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" />
        <button type="button" @click="addRestaurant">Add New Restaurant</button>
    </form>
</template>


<script>

import axios from 'axios';
import HeaDer from './HeaDer.vue';

export default {
    name: 'AddRest',
    components: {
        HeaDer
    },
    data() {
        return {
            name: '',
            restaurant: {
                name: '',
                contact: '',
                address: '',
            }
        }
    },
    methods: {
        async addRestaurant() {
            // Adding Restaurant
            const result = await axios.post('http://localhost:3000/restaurants', {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address,
            });

            if (result.status == 201) {
                this.$router.push({ name: 'Home' })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        // If user doesn't exist redirect to Signup page
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        // to show name 
        this.name = JSON.parse(user).name
    }
}
</script>

<style></style>