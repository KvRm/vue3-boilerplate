<script setup lang="ts">
  import type { AxiosError } from 'axios'

  import type { Pokemon } from '@/shared/api/pokeapi/pokemons/responses/pokemon'
  import type { PokeapiEntitiesResponse } from '@/shared/api/pokeapi/types'

  defineProps<{
    isLoading: boolean
    isLoadingError: boolean
    error?: AxiosError
    data?: Pokemon | PokeapiEntitiesResponse
  }>()
</script>

<template>
  <div class="container">
    <div v-if="isLoading">Loading...</div>

    <div v-else-if="isLoadingError && error?.response?.status === 404">Pokemon Not Found</div>

    <div v-else-if="data && 'sprites' in data">
      pokemon:
      <img :src="data.sprites.front_default" alt="pokemon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
  }
</style>
