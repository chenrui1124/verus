import '@verus-ui/css'
import 'uno.css'

import { createApp } from 'vue'
import dev from './dev.vue'
import router from './router'
import { verus } from '@verus-ui/components'

createApp(dev).use(router).use(verus).mount('#app')
