import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from '@/app/App.vue'
import router from '@/app/router'

import type { Router } from 'vue-router'

import '@purge-icons/generated'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    $router: Router
  }
}

export type AppBootContext = Awaited<ReturnType<typeof initApp>>
export type AppPlugins = (appBoot: AppBootContext) => void | Promise<void>

export function definePlugin(plugin: AppPlugins) {
  return plugin
}

async function initApp() {
  const app = createApp(App)

  const pinia = createPinia()

  pinia.use(({ store }) => {
    store.$router = markRaw(router)
  })
  app.use(pinia)

  const appBoot = {
    app,
    router,
    pinia,
  }

  const plugins = import.meta.glob<Record<string, any>>('./app/plugins/*.ts')

  for (const path in plugins) {
    try {
      const { default: plugin } = await plugins[path]()
      await plugin(appBoot)
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`)
      console.error(error)
    }
  }

  app.use(appBoot.router)

  return appBoot
}

initApp().then(async (appBoot) => {
  await appBoot.router.isReady()

  appBoot.app.mount('#app')
})
