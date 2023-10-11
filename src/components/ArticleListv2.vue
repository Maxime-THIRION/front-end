<template>
  <div class="article-list">
    <h1>Article List</h1>
    <ul>
      <li v-for="article in articles" :key="article.id" class="article-item">
        {{ article.title }}
      </li>
    </ul>
  </div>
  <router-link to="/articles">Go to Article List</router-link>
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
      api.get('/articles2')
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
.article-list {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.article-item {
  background-color: #b82c2c;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;
}

.article-item:hover {
  background-color: #f0f0f0;
}
</style>
