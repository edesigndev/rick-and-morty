<template>
  <!-- <el-card> -->
  <div class="card-character">
    <div class="card-character-image">
      <img :src="character.image" alt="" />
    </div>
    <div class="card-character-description">
      <h4>{{ character.name }}</h4>
      <span>{{ character.status }} - {{ character.species }}</span>
      <span
        >Last Known Location: <br />
        {{ character.location.name }}</span
      >
      <span
        >First seen in: <br />
        {{ character.origin.name }}</span
      >
    </div>
  </div>
  <!-- </el-card> -->
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
