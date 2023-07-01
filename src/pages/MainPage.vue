<script setup lang="ts">
  import { ROUTES } from '@/shared/constants/routes'
</script>

<template>
  <div class="container">
    <RouterLink :to="ROUTES.ABOUT.path">to AboutPage</RouterLink>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
  }
</style>
