<template>
  <div>
    <h1>Article List</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../../api.js';

export default {
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      api.get('/articles')
        .then((response) => {
          this.articles = response.data;
        })
        .catch((error) => {
          console.error('Error fetching articles:', error);
        });
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>

