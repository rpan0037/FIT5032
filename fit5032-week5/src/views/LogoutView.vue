<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { isAdmin, isAuthenticated } from '@/auth'

const router = useRouter()
const message = ref('')

onMounted(() => {
  isAuthenticated.value = false
  message.value = isAdmin.value ? 'Bye Admin' : 'Bye User'
  isAdmin.value = false
  console.log(message.value)
  setTimeout(() => {
    router.push('/login')
  }, 2000)
})
</script>

<template>
  <div class="container d-flex vh-100">
    <div class="row justify-content-center align-self-center w-100">
      <div class="col-md-6 text-center">
        <h2>{{ message }}</h2>
      </div>
    </div>
  </div>
</template>