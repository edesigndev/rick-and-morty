<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <template v-for="character in characters">
      <CardCharacter :character="character" :key="character.name" />
    </template>
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
