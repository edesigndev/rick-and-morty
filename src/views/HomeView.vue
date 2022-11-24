<template>
  <CardImage v-if="!characters.length > 0" />
  <SearchAndFilter :msg-error="characterStore.msgError" @text-search="onGetCharacter" @change-filter="onGetCharacter" />
  <ListOfCardCharacter :characters="characters" />
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useCharacter } from "@/stores/character"

const characterStore = useCharacter()

const onGetCharacter = async (text: string, status: string) => {
  if (text.length > 3) {
    try {
      const res = await characterStore.getCharacter(text, status)
      const { data } = res
      characterStore.setCharacters(data.results)
      characterStore.setMsgError("")
    } catch (error) {
      characterStore.setMsgError("No se encontraron resultados")
      characterStore.setCharacters([])
    }
  } else {
    characterStore.setCharacters([])
  }
}

const characters = computed(() => {
  return characterStore.listCharacters
})
</script>
