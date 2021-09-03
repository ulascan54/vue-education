import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style.css'
import {appAxios} from '@/utils/appAxios'
import appHeader from '@/components/shared/appHeader'
import appBookmarkList from '@/components/shared/appBookmarkList'

import io from "socket.io-client"
const socket=io ("http://localhost:2018")


const app=createApp(App)
app.component("AppHeader",appHeader)
app.component("AppBookmarkList",appBookmarkList)
app.config.globalProperties.$appAxios=appAxios
app.config.globalProperties.$log=console.log
app.config.globalProperties.$socket=socket
app.use(router)
app.use(store)
app.mount('#app')