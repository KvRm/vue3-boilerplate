import { useQuery, UseQueryOptions } from '@tanstack/vue-query'
import type { AxiosResponse } from 'axios'

import * as pokeapi from '@/shared/api/pokeapi'
import type { PokeapiEntitiesResponse } from '@/shared/api/pokeapi/types'

const queryKey = ['pokeapi']

export const useBerriesQuery = () => {
  // const queryClient = useQueryClient()

  const getBerries = (queryParams?: object, vueQueryOptions?: UseQueryOptions) => {
    return useQuery({
      queryKey: [...queryKey, 'berry'],
      queryFn: ({ signal }) => pokeapi.berries.getBerries(queryParams, { signal }),
      ...(vueQueryOptions || {}),
      select: (data) => {
        return <AxiosResponse<PokeapiEntitiesResponse>>data
      },
    })
  }

  return {
    getBerries,
  }
}
