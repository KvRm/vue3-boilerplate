<script setup lang="ts">
  import type { AxiosError } from 'axios'
  import { ref } from 'vue'

  import type { PokeapiEntity } from '@/shared/api/pokeapi/types'

  defineProps<{
    title: string

    isLoading?: boolean
    isLoadingError?: boolean
    error?: AxiosError
    entities?: PokeapiEntity[]
  }>()

  const toggleStatus = ref<boolean>(true)
</script>

<template>
  <div class="container">
    <div v-if="isLoading">Loading...</div>

    <div v-if="isLoadingError">{{ error?.message }}</div>

    <div v-else>
      {{ title }}
      <button class="toggle-btn" @click="toggleStatus = !toggleStatus">toggle</button>
      <ul v-if="toggleStatus && entities">
        <li v-for="entity in entities" :key="entity.name">
          {{ entity.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
  }
</style>
