<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  <router-link to="/registration">Register</router-link>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          email: this.email,
          password: this.password
        });

        // Handle successful login response
        console.log('Login successful', response.data);
      } catch (error) {
        // Handle login error
        console.error('Error logging in', error);
      }
    }
  }
}
</script>

<style>
/* Add any component-specific styles here */
</style>
