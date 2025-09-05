<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login, isAuthenticated } from '@/auth'

const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')

const onSubmit = () => {
  error.value = ''
  const ok = login(username.value.trim(), password.value)
  if (ok) {
    router.push('/about')
  } else {
    error.value = 'Invalid username or password.'
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
            <label class="form-label" for="username">Username</label>
            <input id="username" class="form-control" v-model="username" autocomplete="username" />
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
          Demo creds: <code>admin</code> / <code>Password123!</code>
        </div>
      </div>
    </div>
  </div>
</template>