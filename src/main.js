import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Papers from "./components/Papers/Papers";


import 'bulma/bulma.sass'

createApp(App)
  .use(store)
  .use(router)
  .component("Papers", Papers)
  .mount('#app')

