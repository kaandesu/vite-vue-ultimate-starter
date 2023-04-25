import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createThemeManager } from './plugins/themeManager'
import './assets/main.css'
import './assets/style.css'

const app = createApp(App)
  .use(router)
  .use(createThemeManager({ light: 'breeze', dark: 'storm', watchSystemTheme: true }))

app.mount('#app')
