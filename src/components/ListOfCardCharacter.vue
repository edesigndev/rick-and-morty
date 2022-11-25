<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <template v-for="character in characters" :key="character.id">
      <CardCharacter :character="character" />
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
