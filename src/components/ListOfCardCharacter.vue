<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div v-for="character in characters" :key="character.name">
      <CardCharacter :character="character" />
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface Props {
  characters?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  characters: () => [],
})
</script>
