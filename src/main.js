import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'animate.css'

// Create app instance
const app = createApp(App)

// Use plugins
app.use(router)

// Mount app
app.mount('#app')

// Export app instance for global registrations
export { app }
