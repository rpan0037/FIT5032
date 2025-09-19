<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { userRole, isAuthenticated, isAdmin } from '@/auth'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const auth = getAuth()

const onSubmit = async () => {
  error.value = ''
  try {
    await signInWithEmailAndPassword(auth, email.value.trim(), password.value)
    userRole(auth.currentUser.email)
    if(isAdmin.value)
    router.push('/FireLogin')
    else
      router.push('/about') // success redirect
    isAuthenticated.value = true
    userRole(auth.currentUser.email)
    console.log("Current user:", auth.currentUser.email)
    console.log("User role admin? : ", isAdmin.value)
  } catch (e) {
    error.value = e?.code || 'Invalid credentials.'
    isAuthenticated.value = false
  }
}
</script>

<template>
  <div class="container mt-5 page-container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="text-center mb-4">
          <h1 class="display-6">Member Login</h1>
          <p class="lead mb-0">Use your credentials to continue.</p>
        </div>

        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label class="form-label" for="email">Email</label>
            <input id="email" class="form-control" v-model="email" autocomplete="email" />
          </div>

          <div class="mb-3">
            <label class="form-label" for="password">Password</label>
            <input id="password" class="form-control" type="password" v-model="password" autocomplete="current-password" />
          </div>

          <div v-if="error" class="text-danger mb-3">{{ error }}</div>

          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Log in</button>
          </div>
        </form>

        <div class="mt-3 small text-muted">
          Demo creds: <code>admin@example.com</code> / <code>Password123!</code>
        </div>
      </div>
    </div>
  </div>
</template>