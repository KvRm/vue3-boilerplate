import '@purge-icons/generated'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'

import App from '@/app/App.vue'
import router from '@/app/router'

export async function initApp() {
  const pinia = createPinia()
  const app = createApp(App)

  app.use(VueQueryPlugin)
  app.use(router)
  app.use(pinia)
  pinia.use(({ store }) => {
    store.$router = markRaw(router)
  })

  const appBoot = {
    app,
    router,
    pinia,
  }

  const plugins = import.meta.glob<Record<string, any>>('@/app/plugins/*.ts')

  for (const path in plugins) {
    try {
      const { default: plugin } = await plugins[path]()
      await plugin(appBoot)
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`)
      console.error(error)
    }
  }

  return appBoot
}
