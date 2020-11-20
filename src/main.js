import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Papers from "./components/Papers/Papers";
import '../node_modules/bulma/css/bulma.css'



import 'bulma/bulma.sass'
import Activities from "./components/Activities";

createApp(App)
  .use(store)
  .use(router)
  .component("Papers", Papers)
  .component("Activities", Activities)
  .mount('#app')

