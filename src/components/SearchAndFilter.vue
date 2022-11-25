<template>
  <div class="search-character">
    <div class="search-character-content gap-3">
      <input class="w-full rounded-lg border p-3 text-sm" placeholder="Ingresa nombre del personaje" type="text" minlength="4" maxlength="20" id="search" v-model="text" />
      <select
        class="w-auto rounded-lg border p-3 text-sm"
        id="status"
        v-if="!showError && text.length > 0"
        v-model="statusFilter"
        placeholder="Status"
        size="large"
        @change="emit('change-filter', text, statusFilter)"
      >
        <option v-for="item in options" :key="item.value" :label="item.name" :value="item.value" />
      </select>
    </div>
    <div v-if="showError && text.length > 0" class="search-character-error">
      <span>{{ showError }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from "vue"
import { status } from "@/utils/enums"

const props = defineProps({
  msgError: {
    type: String,
    default: "",
  },
})

const text = ref("")
const statusFilter = ref("")
const error = ref(false)
const options = Object.values(status)

const emit = defineEmits(["text-search", "change-filter"])

watch(text, (val) => {
  text.value = val.trim()

  emit("text-search", text.value, statusFilter.value)
})
const showError = computed(() => {
  let msj = ""
  const count = text.value.length
  if (count > 0 && count < 4) {
    msj = "Minimo 4 caracteres"
  } else if (props.msgError) {
    msj = props.msgError
  } else {
    msj = ""
  }
  return msj
})
</script>

<style>
.search-character {
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
}
.search-character .search-character-content {
  display: flex;
  flex-direction: row;
}

.search-character .search-character-error {
  font-size: small;
  color: red;
  margin-top: 0.2rem;
  text-align: left;
}
</style>
