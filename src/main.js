import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Papers from "./components/Papers/Papers";

import '../node_modules/bulma/css/bulma.css'
import '../node_modules/bulma-extensions/bulma-timeline/dist/css/bulma-timeline.min.css'

import Activities from "./components/Activities";
import ProExperienceCard from "./components/ProfessionalExperience/ProExperienceCard";
import ProExperiences from "./components/ProfessionalExperience/ProExperiences";
import WorkTimeline from "./components/ProfessionalExperience/WorkTimeline";

createApp(App)
  .use(store)
  .use(router)
  .component("Papers", Papers)
  .component("Activities", Activities)
  .component("ProExperienceCard", ProExperienceCard)
  .component("ProExperiences", ProExperiences)
  .component("WorkTimeline", WorkTimeline )
  .mount('#app')

