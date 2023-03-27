<template>
    <HeaDer />
    <h1>Hello {{this.name}}, Welcome to Home Page</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
        </tr>
    </table>
</template>


<script>

import HeaDer from './HeaDer.vue';
import axios from 'axios';

export default {
    name: 'HomeCmp',
    data(){
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
        HeaDer
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