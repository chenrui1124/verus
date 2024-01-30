import '@css'
import 'uno.css'

import { createApp } from 'vue'
import dev from './dev.vue'
import router from './router'
import { verus } from '@components'

createApp(dev).use(router).use(verus).mount('#app')
