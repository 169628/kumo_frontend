<script setup>
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import axios from 'axios'

const props = defineProps({
  show: Boolean,
  device: Object,
})
const logList = ref([])

const toast = useToastStore()
const { open } = toast

const router = useRouter()

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const token = localStorage.getItem('kumo')
const header = { headers: { Authorization: `Bearer ${token}` } }

// for close modal
const emit = defineEmits(['emit-close'])

const close = () => {
  emit('emit-close', false)
}

watch(
  () => props.show,
  async (visible) => {
    if (visible) {
      try {
        const result = await axios.get(`${BASE_URL}/api/device/${props.device?.deviceId}`, header)
        if (result.data?.status == 2) {
          localStorage.removeItem('kumo')
          await router.push('/')
          return
        } else if (result.data?.status != 1) {
          close()
          return open('error, can not find any log!!', 'error')
        }
        logList.value = result.data?.data
      } catch (error) {
        console.log(error)
        close()
        open('error!!!', 'error')
      }
    }
  },
)
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="fixed inset-0 z-90 flex items-start justify-center pt-12">
      <div class="absolute inset-0 bg-black/50" @click="close"></div>

      <!-- Modal -->
      <div class="relative bg-base-100 w-full max-w-2xl rounded-xl shadow-xl z-10 flex flex-col">
        <!-- Header -->
        <div class="flex justify-between items-center p-6 border-b">
          <h3 class="text-2xl font-semibold">
            <slot name="title"> {{ props.device.sn }} Log</slot>
          </h3>

          <button class="text-base-content hover:text-gray-700" @click="close">✕</button>
        </div>

        <!-- Body -->
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>LAST CONNECT</th>
                <th>SESSION ID</th>
                <th>STATUS</th>
                <th>SV</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in logList" :key="i.index">
                <td>{{ i.reportedAt }}</td>
                <td>{{ i.sessionId }}</td>
                <td>{{ i.status }}</td>
                <td>{{ i.sv }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Footer -->
        <div class="p-6 border-t flex justify-end gap-3"></div>
      </div>
    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
