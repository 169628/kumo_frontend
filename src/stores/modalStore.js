import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  // state
  const show = ref(false)
  // getters 注意!!! computed 會回傳一個"值"
  //const doubleCount = computed(() => count.value * 2)
  // actions
  //function increment() {
  //     count.value++
  //   }
  const open = () => {
    show.value = true
  }
  const close = () => {
    show.value = false
  }
  // return 想要暴露給外部使用的
  return { show, open, close }
})
