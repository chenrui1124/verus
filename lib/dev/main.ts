import '@css'
import 'uno.css'

import { createApp } from 'vue'
import dev from './dev.vue'
import router from './router'

createApp(dev).use(router).mount('#app')
