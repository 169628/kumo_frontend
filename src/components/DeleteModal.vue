<script setup>
import { ref, computed, watch } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import axios from 'axios'

const props = defineProps({
  show: Boolean,
  campaign: Object,
  editNo: Number,
})

const toast = useToastStore()
const { open } = toast

const BASE_URL = import.meta.env.VITE_API_BASE_URL

// for close modal
const emit = defineEmits(['emit-close'])

const close = () => {
  emit('emit-close', false)
}

const refresh = () => {
  emit('emit-refresh', true)
}

const deleteCampaign = async () => {
  try {
    const result = await axios.delete(`${BASE_URL}/api/campaign/${props.campaign?.campaignId}`)
    if (result.data?.status != 1) {
      close()
      open('failed to delete the campaign', 'error')
      return
    }

    refresh()
    close()
    open('delete success!!')
    return
  } catch (error) {
    console.log(error)
    close()
    open('failed to delete the campaign')
  }
}
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="fixed inset-0 z-90 flex items-start justify-center pt-12">
      <div class="absolute inset-0 bg-black/50" @click="close"></div>

      <!-- Modal -->
      <div class="relative bg-primary w-full max-w-lg rounded-xl shadow-xl z-10 flex flex-col">
        <!-- Header -->
        <div class="flex justify-between items-center p-6 border-b">
          <h3 class="text-2xl font-semibold">
            <slot name="title">Delete Campaign</slot>
          </h3>

          <button class="text-base-content hover:text-gray-700" @click="close">✕</button>
        </div>

        <!-- Body -->
        <div class="pt-8 pb-7 px-6 text-xl font-medium">
          Are you sure you want to delete campaign No. {{ props.editNo }} ?
        </div>

        <!-- Footer -->
        <div class="p-6 border-t flex justify-end gap-3">
          <button type="button" class="btn btn-soft" @click="close">Cancel</button>
          <button type="button" class="btn btn-soft btn-error" @click="deleteCampaign">Yes</button>
        </div>
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
