import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import highlight from './utils/highlight'

createApp(App).use(store).use(router).use(highlight).mount('#app')
