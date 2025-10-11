import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AddBookView from '../views/AddBookView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import { isAuthenticated } from '../auth'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'

const routes = [
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView,
    meta: { requiresAuth: true }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router