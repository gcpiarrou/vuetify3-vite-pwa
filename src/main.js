import 'vuetify/styles' // Global CSS has to be imported

import { createApp } from 'vue';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/lib/iconsets/fa'

import '@fortawesome/fontawesome-free/css/all.css'


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
app.mount('#app');