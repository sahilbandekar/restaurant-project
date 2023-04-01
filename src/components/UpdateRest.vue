<template>
    <HeaDer />
    <h1>Hello User, Welcome to Update Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name"/>
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact"/>
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address"/>
        <button type="button" @click="updateRestaurant">Update Restaurant</button>
    </form>
</template>


<script>

import HeaDer from './HeaDer.vue';
import axios from 'axios';
export default {
    name: 'UpdateRest',
    components: {
        HeaDer
    },
    data() {
        return {
            restaurant: {
                name: '',
                contact: '',
                address: '',
            }
        }
    },
    methods: {
        async updateRestaurant(){
            const result = await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id, {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address,
            });

            if(result.status == 200){
                this.$router.push({ name: 'Home' })
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }

        // Fetching data from id & Prefilling data
        const result = await axios.get('http://localhost:3000/restaurants/'+this.$route.params.id)
        this.restaurant = result.data
    }
}
</script>

<style></style>