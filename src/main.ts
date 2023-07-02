import { initApp } from '@/app/initApp'

initApp().then(async (appBoot) => {
  await appBoot.router.isReady()

  appBoot.app.mount('#app')
})
