import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap-vue-3';
import '@fortawesome/fontawesome-free/css/all.css'; // Importa o CSS do Font Awesome
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.mount('#app')
