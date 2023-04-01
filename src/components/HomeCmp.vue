<template>
    <HeaDer />
    <h1>Hello {{ this.name }}, Welcome to Home Page</h1>
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
            <td>
                <RouterLink :to="'/update/' + item.id" class="updateBtn">Update</RouterLink>
                <button @click="deleteRestaurant(item.id)" class="btnDel">Delete</button>
            </td>

        </tr>
    </table>
</template>


<script>

import HeaDer from './HeaDer.vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

export default {
    name: 'HomeCmp',
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
        HeaDer,
        RouterLink
    },

    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete('http://localhost:3000/restaurants/' + id);
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem("user-info");
            // to show name 
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }
            // Display Restaurants list
            let result = await axios.get('http://localhost:3000/restaurants');
            this.restaurants = result.data;
        }
    },

    async mounted() {
        this.loadData();
    }
}
</script>


<style>
table {
    margin: 0% auto;
}

td {
    width: 160px;
    height: 40px;
}

tr:nth-child(1) {
    font-weight: 700;
}

tr {
    text-align: center;
}

tr:nth-child(2n+1) {
    background-color: #dff5fc;
}

.btnDel {
    background: #FF4742;
    border: 1px solid #FF4742;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
    font-size: 14px;
    line-height: 16px;
    outline: 0;
    margin-left: 10px;
    padding: 7px 10px;
    text-align: center;
    vertical-align: middle;
}

.btnDel:hover,
.btnDel:active {
    background-color: initial;
    background-position: 0 0;
    color: #FF4742;
}

.btnDel:active {
    opacity: .5;
}

.updateBtn {
    appearance: none;
    background-color: #2ea44f;
    border: 1px solid rgba(27, 31, 35, .15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
    font-size: 14px;
    padding: 7px 10px;
    position: relative;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
}

.updateBtn:hover,
.updateBtn:active {
    background-color: initial;
    background-position: 0 0;
    color: #2ea44f;
    border-color: #2ea44f;
}

.updateBtn:active {
    opacity: .5;
}
</style>
