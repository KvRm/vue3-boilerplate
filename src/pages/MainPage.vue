<script setup lang="ts">
  import { ROUTES } from '@/shared/constants/routes'
  import PokemonsWidget from '@/widgets/PokemonsWidget.vue'
</script>

<template>
  <div class="container">
    <RouterLink :to="ROUTES.ABOUT.path">to AboutPage</RouterLink>

    <PokemonsWidget />
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
