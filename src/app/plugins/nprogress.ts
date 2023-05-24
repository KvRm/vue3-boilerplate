import { definePlugin } from '@/main'
import { useNProgress } from '@vueuse/integrations/useNProgress'

const { start, done } = useNProgress()

export default definePlugin(({ router }) => {
  router.beforeEach(() => {
    start()
  })
  router.afterEach(() => {
    done()
  })
})
