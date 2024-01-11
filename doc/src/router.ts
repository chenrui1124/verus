import { createRouter, createWebHistory } from 'vue-router'
import home from './home.vue'

const router = (() => {
  const globs = import.meta.glob('./examples/**/*.vue', { eager: true })

  const examples = Object.keys(globs).map((url): string => {
    return url.match(/(?<=examples\/)[-|\w]+(?=.vue)/)![0]
  })

  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: home
      },
      ...examples.map(name => ({
        name,
        path: `/${name}`,
        component: () => import(`./examples/${name}.vue`)
      }))
    ]
  })
})()

export default router
