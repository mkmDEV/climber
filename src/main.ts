import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseTitle from '@atom/BaseTitle.vue'
import BaseDialog from '@organism/BaseDialog.vue'

createApp(App)
  .component('BaseTitle', BaseTitle)
  .component('BaseDialog', BaseDialog)
  .mount('#app')
