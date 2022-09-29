import { createApp } from 'vue'
import App from './App2.vue'

createApp(App).provide('currentUser',{name:'lijian'}).mount('#app')
