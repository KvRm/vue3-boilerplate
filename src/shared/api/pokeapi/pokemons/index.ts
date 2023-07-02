import { http } from '@/shared/api/pokeapi/instance'
import type { Pokemon } from '@/shared/api/pokeapi/pokemons/responses/pokemon'
import type { PokeapiEntitiesResponse } from '@/shared/api/pokeapi/types'
import type { FetchParams } from '@/shared/typings/fetch'

export const pokemons = {
  async getPokemons(queryParams?: object, fetchParams?: FetchParams) {
    const { signal } = fetchParams || {}
    return http.get<PokeapiEntitiesResponse>('pokemon', { params: queryParams, signal })
  },

  async searchPokemons(pokemonName: string, queryParams?: object, fetchParams?: FetchParams) {
    const { signal } = fetchParams || {}
    return http.get<Pokemon | PokeapiEntitiesResponse>(`pokemon/${pokemonName}`, { params: queryParams, signal })
  },
}
