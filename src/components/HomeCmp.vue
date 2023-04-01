<template>
    <HeaDer />
    <h1>Hello {{this.name}}, Welcome to Home Page</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td><RouterLink :to="'/update/'+item.id">Update</RouterLink></td>
            
        </tr>
    </table>
</template>


<script>

import HeaDer from './HeaDer.vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: 'HomeCmp',
    data(){
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
    HeaDer,
    RouterLink
},
    async mounted() {
        let user = localStorage.getItem("user-info");
        // to show name 
        this.name = JSON.parse(user).name

        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }


        let result = await axios.get('http://localhost:3000/restaurants');
        console.log(result)
        this.restaurants = result.data;
        
    }
}
</script>

<style>

td{
    width: 120px;
    height: 40px;
}
table{
    margin: 0 auto;
}
</style>