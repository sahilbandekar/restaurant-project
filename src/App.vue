<template>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    RouterView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}

/* SignUp.vue & LogIn.vue CCS STARTED */
.wrapper {
  width: 30%;
  text-align: center;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
  padding: 10px;
  margin: 100px auto;
  border-radius: 12px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: white;
  background-color: skyblue;
  cursor: pointer;
}

.formFooter {
  display: flex;
  justify-content: center;
}

.formFooter p:first-child {
  padding-right: 10px;
}
</style>
