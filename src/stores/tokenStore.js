import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', () => {
  const token = ref('')
  const header = ref({})

  const setToken = (tokenString) => {
    token.value = 'Bearer' + tokenString
    header.value = {
      headers: {
        Authorization: `Bearer ${tokenString}`,
      },
    }
  }

  return { token, setToken, header }
})
