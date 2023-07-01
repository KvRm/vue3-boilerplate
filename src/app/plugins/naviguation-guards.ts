import { definePlugin } from '@/app/scripts/definePlugin'

export default definePlugin(({ router }) => {
  router.beforeEach(async (to, from) => {
    console.log('from' + from.name?.toString())
    console.log('to' + to.name?.toString())
  })
})
