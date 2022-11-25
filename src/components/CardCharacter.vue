<template>
  <div class="grid grid-cols-2 gap-4 border rounded-lg shadow-md mb-2 w-50 h-70">
    <img class="object-cover w-full h-full rounded-l" :src="character.image" alt="" />
    <div class="p-4 leading-normal text-left">
      <h5 class="mb-2 font-bold tracking-tight text-gray-900">{{ character.name }}</h5>
      <p class="mb-2 font-normal text-gray-700">{{ character.status }} - {{ character.species }}</p>
      <p class="mb-2 font-normal text-gray-700">Last Known Location:</p>
      <p class="mb-2 font-normal text-gray-700">{{ character.location.name }}</p>
      <p class="mb-2 font-normal text-gray-700">First seen in:</p>
      <p class="mb-2 font-normal text-gray-700">{{ character.origin.name }}</p>
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
