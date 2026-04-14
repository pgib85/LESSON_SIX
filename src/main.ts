import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'

const savedTheme = localStorage.getItem('theme') ?? 'dark'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: savedTheme === 'light' ? 'light' : 'dark',
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
