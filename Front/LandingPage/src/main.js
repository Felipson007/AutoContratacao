import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap-vue-3';
import '@fortawesome/fontawesome-free/css/all.css';
import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
router.beforeEach((to, from, next) => {
  const authenticated = localStorage.getItem('authenticated') === 'true';
  if (to.name === 'PostEditor' || to.name === 'EditPost') {
    if (!authenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

app.use(router).mount('#app');