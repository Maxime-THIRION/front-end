import Vue from 'vue';
import Router from 'vue-router';
import ArticleList from './components/ArticleList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ArticleList,
    },
    // Add more routes as needed
  ],
});

