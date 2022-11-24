<template>
  <div class="search-character">
    <div class="search-character-content">
      <el-input v-model="text" placeholder="Ingresa nombre del personaje" minlength="4" maxlength="20" size="large" />
      <el-select v-if="!showError && text.length > 0" v-model="statusFilter" placeholder="Status" size="large" @change="emit('change-filter', text, statusFilter)">
        <el-option v-for="item in options" :key="item.value" :label="item.name" :value="item.value" />
      </el-select>
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
