import { createRouter, createWebHistory } from 'vue-router';
import ArticleList from './components/ArticleList.vue'; // Make sure the path is correct
import ArticleListv2 from './components/ArticleListv2.vue'; // Make sure the path is correct
import LoginForm from './components/LoginForm.vue'; // Make sure the path is correct
import RegistrationForm from './components/RegistrationForm.vue';

const routes = [
  {
    path: '/articles',
    name: 'ArticleList',
    component: ArticleList,
  },

  {
    path: '/articles2',
    name: 'ArticleList2',
    component: ArticleListv2,
  },

  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
  },

  {
    path: '/registration',
    name: 'RegistrationForm',
    component: RegistrationForm,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
