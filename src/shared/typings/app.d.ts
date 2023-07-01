import { initApp } from '@/app/initApp'

export type AppBootContext = Awaited<ReturnType<typeof initApp>>
export type AppPlugins = (appBoot: AppBootContext) => void | Promise<void>
