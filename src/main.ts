/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const app = createApp(App)
app.use(Vue3Toastify, {
    position: 'top-right',
    timeout: 3000,
  } as ToastContainerOptions);
registerPlugins(app)

app.mount('#app')
