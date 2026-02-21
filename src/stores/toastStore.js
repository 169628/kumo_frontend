import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', () => {
  const show = ref(false)
  const mode = ref('success')
  const modeMessage = ref('Create success!!')

  const open = (message, status = 'success') => {
    mode.value = status
    modeMessage.value = message
    show.value = true
    setTimeout(() => {
      show.value = false
    }, 2000)
  }

  return { show, mode, modeMessage, open }
})
