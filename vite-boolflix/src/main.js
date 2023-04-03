import { createApp } from 'vue'
import './assets/general.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar as faStarfull} from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'

library.add(faStarfull,faStar)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
