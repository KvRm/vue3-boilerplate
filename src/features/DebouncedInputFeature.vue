<script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'

  defineProps<{
    label: string
    id: string
  }>()

  const searchModel = defineModel<string>({ required: true })

  const debouncedInput = useDebounceFn((event: Event) => {
    searchModel.value = (event.target as HTMLInputElement).value
  }, 700)
</script>

<template>
  <div class="container">
    <label :for="id">
      {{ label }}
      <input :id="id" type="search" :name="id" @input="debouncedInput" />
    </label>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
  }
</style>
