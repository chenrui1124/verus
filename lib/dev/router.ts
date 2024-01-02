import { createRouter, createWebHistory } from 'vue-router'

const router = (() => {
  const globs = import.meta.glob('../components/**/demo.vue', { eager: true })

  const demos = Object.keys(globs).map((path): { name: string; component: any } => ({
    name: path.match(/(?<=\/)[-|\w]+(?=\/demo.vue)/)![0],
    component: (globs[path] as any)?.default,
  }))

  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: demos.map(({ name, component }) => ({
      path: `/${name}`,
      name,
      component,
    })),
  })
})()

export default router
