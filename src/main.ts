import { createApp } from 'vue'
import App from './App.vue'
import "./App.less"
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.mount('#app');
