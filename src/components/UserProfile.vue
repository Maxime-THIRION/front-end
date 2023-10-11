<script>
export default {
  methods: {
    logoutUser() {
      // Clear authentication token from local storage or cookie
      localStorage.removeItem('token'); // Assuming you store the token in local storage
    }
  }
}
</script>
