import { createApp } from "vue"
import { createPinia } from "pinia"
import "./scss/main.scss"
import ElementPlus from "element-plus"
import App from "./App.vue"
import router from "./router"

createApp(App).use(createPinia()).use(router).use(ElementPlus, { size: "small", zIndex: 3000 }).mount("#app")
