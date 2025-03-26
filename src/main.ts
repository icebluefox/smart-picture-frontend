import { createApp } from 'vue'
import './style.css'
// @ts-ignore
import App from './App.vue'
import {createPinia} from "pinia";
import router from "./router";
import MessagePlugin from './plugins/message';

const app = createApp(App);

app.use(createPinia())
   .use(router)
   .use(MessagePlugin)
   .mount('#app')
