import { useQuery, UseQueryOptions } from '@tanstack/vue-query'
import { AxiosResponse } from 'axios'
import { Ref } from 'vue'

import * as pokeapi from '@/shared/api/pokeapi'
import { Pokemon } from '@/shared/api/pokeapi/pokemons/responses/pokemon'
import { PokeapiEntitiesResponse } from '@/shared/api/pokeapi/types'

const queryKey = ['pokeapi']

export const usePokemonsQuery = () => {
  // const queryClients = useQueryClient()

  const getPokemons = (queryParams?: object, vueQueryOptions?: UseQueryOptions) => {
    return useQuery({
      queryKey: [...queryKey, 'pokemons'],
      queryFn: ({ signal }) => pokeapi.pokemons.getPokemons(queryParams, { signal }),
      ...(vueQueryOptions || {}),
      select: (data) => {
        return <AxiosResponse<PokeapiEntitiesResponse>>data
      },
    })
  }

  const searchPokemons = (pokemonName: Ref<string>, queryParams?: object, vueQueryOptions?: UseQueryOptions) => {
    return useQuery({
      queryKey: [...queryKey, 'pokemons', 'search', pokemonName],
      queryFn: ({ signal }) => pokeapi.pokemons.searchPokemons(pokemonName.value, queryParams, { signal }),
      ...(vueQueryOptions || {}),
      select: (data) => {
        return data as AxiosResponse<Pokemon>
      },
    })
  }

  return {
    getPokemons,
    searchPokemons,
  }
}
