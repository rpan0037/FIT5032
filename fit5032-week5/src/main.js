import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9PtANKwT_PZbvy7CzxUL8M_hfqxp2t-g",
  authDomain: "fit5032-week6-651ed.firebaseapp.com",
  projectId: "fit5032-week6-651ed",
  storageBucket: "fit5032-week6-651ed.firebasestorage.app",
  messagingSenderId: "121831707028",
  appId: "1:121831707028:web:a7a2f8ba538de63c677f81"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')