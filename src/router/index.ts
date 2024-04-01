import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ArticleView from '../views/ArticleView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/article', component: ArticleView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
