import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import router from "./router";
import './style.css'
import './index.css'
import App from './App.vue'

//vue.use(VueSweetalert2);
createApp(App)
  .use(router)
  .mount("#app");
