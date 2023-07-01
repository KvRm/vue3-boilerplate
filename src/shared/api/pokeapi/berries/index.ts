import { http } from '@/shared/api/pokeapi/instance'
import { PokeapiEntitiesResponse } from '@/shared/api/pokeapi/types'
import { FetchParams } from '@/shared/typings/fetch'

export const berries = {
  async getBerries(queryParams?: object, fetchParams?: FetchParams) {
    const { signal } = fetchParams || {}
    return http.get<PokeapiEntitiesResponse>('berry', { params: queryParams, signal })
  },
}
