<template>
  <div class="grid grid-cols-2 gap-4 border rounded-lg shadow-md mb-2 w-50">
    <img class="object-cover w-full h-full rounded-l" :src="character.image" alt="" />
    <div class="p-4 leading-normal text-left">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ character.name }}</h5>
      <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ character.status }} - {{ character.species }}</p>
      <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">Last Known Location:</p>
      <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ character.location.name }}</p>
      <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">First seen in:</p>
      <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">{{ character.origin.name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue-demi"

export interface Props {
  image: string
  name: string
  status: string
  species: string
  location: string
  origin: string
}

const props = defineProps({
  character: {
    type: Object as PropType<Props>,
    required: true,
  },
})
</script>
