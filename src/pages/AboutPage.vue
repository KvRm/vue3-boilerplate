<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { computed, onMounted, ref, watch } from 'vue'

  import { ROUTES } from '@/shared/constants/routes'
</script>
<template>
  <RouterLink :to="ROUTES.MAIN.path">to MAINPage</RouterLink>
</template>
<style scoped lang="scss">
  .container {
    display: flex;
  }
</style>
