import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.weatherapi.com/v1/';

createApp(App).use(router).mount('#app')
