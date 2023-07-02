import { useQuery, UseQueryOptions } from '@tanstack/vue-query'
import type { AxiosResponse } from 'axios'
import type { Ref } from 'vue'

import * as pokeapi from '@/shared/api/pokeapi'
import type { Pokemon } from '@/shared/api/pokeapi/pokemons/responses/pokemon'
import type { PokeapiEntitiesResponse } from '@/shared/api/pokeapi/types'

const queryKey = ['pokeapi']

export const usePokemonsQuery = () => {
  // const queryClients = useQueryClient()

  const getPokemons = (queryParams?: object, vueQueryOptions?: UseQueryOptions) => {
    return useQuery({
      queryKey: [...queryKey, 'pokemons'],
      queryFn: ({ signal }) => pokeapi.pokemons.getPokemons(queryParams, { signal }),
      ...(vueQueryOptions || {}),
      select: (data) => {
        return data as AxiosResponse<PokeapiEntitiesResponse>
      },
    })
  }

  const searchPokemons = (pokemonName: Ref<string>, queryParams?: object, vueQueryOptions?: UseQueryOptions) => {
    return useQuery({
      queryKey: [...queryKey, 'pokemons', 'search', pokemonName],
      queryFn: ({ signal }) => pokeapi.pokemons.searchPokemons(pokemonName.value, queryParams, { signal }),
      ...(vueQueryOptions || {}),
      select: (data) => {
        return data as AxiosResponse<Pokemon | PokeapiEntitiesResponse>
      },
    })
  }

  return {
    getPokemons,
    searchPokemons,
  }
}
