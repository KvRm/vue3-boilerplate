import { useNProgress } from '@vueuse/integrations/useNProgress'

import { definePlugin } from '@/app/scripts/definePlugin'

const { start, done } = useNProgress()

export default definePlugin(({ router }) => {
  router.beforeEach(() => {
    start()
  })
  router.afterEach(() => {
    done()
  })
})
