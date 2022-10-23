import { createApp } from 'vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';

import App from './App.vue';
import router from './router';

import './style.css';

addIcons();

const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.use(router);
app.mount('#app');
