import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css"//*@ = src
import appHeader from "@/components/appHeader"

const app = createApp(App)
app.component("app-header",appHeader)
app.mount('#app')
