<script setup lang="ts">
  import type { AxiosError } from 'axios'
  import { ref } from 'vue'

  import PokeapiEntitiesEnitity from '@/entities/PokeapiEntitiesEnitity.vue'
  import SearchedPokemonEntity from '@/entities/SearchedPokemonEntity.vue'
  import DebouncedInputFeature from '@/features/DebouncedInputFeature.vue'
  import { useBerriesQuery } from '@/shared/services/useBerriesQuery'
  import { usePokemonsQuery } from '@/shared/services/usePokemonsQuery'

  const { getPokemons, searchPokemons } = usePokemonsQuery()
  const { getBerries } = useBerriesQuery()

  const search = ref<string>('')

  const getPokemonsQuery = getPokemons({}, { refetchOnWindowFocus: false, retry: 1 })

  const getBerriesQuery = getBerries({}, { refetchOnWindowFocus: false, retry: 1 })

  const searchPokemonsQuery = searchPokemons(
    search,
    {},
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 1,
    }
  )
</script>

<template>
  <div class="container">
    <DebouncedInputFeature id="pokemons-search" v-model="search" label="Search Pokemon!" />

    <SearchedPokemonEntity
      :is-loading="searchPokemonsQuery.isLoading.value"
      :is-loading-error="searchPokemonsQuery.isLoadingError.value"
      :error="(searchPokemonsQuery.error.value as AxiosError)"
      :data="searchPokemonsQuery.data.value?.data"
    />

    <PokeapiEntitiesEnitity
      title="Pokemons"
      :is-loading="getPokemonsQuery.isLoading.value"
      :is-loading-error="getPokemonsQuery.isLoadingError.value"
      :error="(getPokemonsQuery.error.value as AxiosError)"
      :entities="getPokemonsQuery.data.value?.data.results"
    />

    <PokeapiEntitiesEnitity
      title="Berries"
      :is-loading="getBerriesQuery.isLoading.value"
      :is-loading-error="getBerriesQuery.isLoadingError.value"
      :error="(getBerriesQuery.error.value as AxiosError)"
      :entities="getBerriesQuery.data.value?.data.results"
    />
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
