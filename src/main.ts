import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount('#app');
