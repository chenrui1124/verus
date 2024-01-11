import 'uno.css'
import './main.css'
import 'verus-ui/style'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
