import 'vuetify/styles' // Global CSS has to be imported

// Vue
import { createApp } from 'vue';

// Vuetify
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Fontawesome
import { aliases, fa } from 'vuetify/lib/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'

// Toast
import Toast from "vue-toastification"; // https://github.com/Maronato/vue-toastification
import "vue-toastification/dist/index.css";
const toastOptions = {};

import router from './router'
import store from './store'

import App from './App.vue';



import { loadFonts } from './plugins/webfontloader';
loadFonts();

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(store);
app.use(Toast, toastOptions);
app.mount('#app');