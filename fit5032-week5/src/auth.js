import { ref } from 'vue'

export const isAuthenticated = ref(false)
export const isAdmin = ref(false)

const DEMO_USER = 'pandiaspam@gmail.com'
const DEMO_PASS = 'Password123!'

export function userRole(username, password) {
  if (username === DEMO_USER) {
    isAdmin.value = true
  }
}

export function logout() {
  isAuthenticated.value = false
  isAdmin.value = false
}