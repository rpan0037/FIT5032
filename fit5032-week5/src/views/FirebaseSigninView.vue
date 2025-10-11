<template>
  <div class="container mt-5" style="max-width: 400px;">
    <h1 class="mb-4">Create an Account</h1>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" placeholder="Enter your email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" id="password" v-model="password" class="form-control" placeholder="Enter your password" required />
      </div>
      <button type="submit" class="btn btn-primary w-100">Register</button>
    </form>
  </div>
</template>

<script setup>
import {ref} from "vue" 
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useRouter} from "vue-router"
const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Firebase Register Successful!")
        router.push("/FireLogin")
        
    }).catch((error) => {
        console.log(error.code)
    })
}
</script>