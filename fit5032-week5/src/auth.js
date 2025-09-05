import { ref } from 'vue'

export const isAuthenticated = ref(false)

const DEMO_USER = 'admin'
const DEMO_PASS = 'Password123!'

export function login(username, password) {
  if (username === DEMO_USER && password === DEMO_PASS) {
    isAuthenticated.value = true
    return true
  }
  return false
}

export function logout() {
  isAuthenticated.value = false
}