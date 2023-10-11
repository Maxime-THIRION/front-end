<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="registerUser">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    <router-link to="/login">Login</router-link>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await axios.post('http://localhost:3000/register', {
            username: this.username,
            email: this.email,
            password: this.password
          });
  
          // Handle successful registration response
          console.log('Registration successful', response.data);
        } catch (error) {
          // Handle registration error
          console.error('Error registering user', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  