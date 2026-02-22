<script setup>
import { storeToRefs } from 'pinia'
import { useToastStore } from '@/stores/toastStore'

const toast = useToastStore()
const { show, mode, modeMessage } = storeToRefs(toast)
</script>

<template>
  <transition name="fade">
    <div v-if="show">
      <div
        v-if="mode == 'success'"
        class="alert alert-warning !w-auto inline-flex fixed z-50 top-3 left-1/2 -translate-x-1/2 items-center px-6 py-3 shadow-lg"
        role="alert"
      >
        <div class="flex flex-col items-center sm:flex-row gap-2">
          <div class="flex gap-1 items-center">
            <span class="icon-[tabler--circle-check] shrink-0 size-6"></span>
            <p class="text-lg font-semibold">Success:</p>
          </div>
          <p class="text-lg">{{ modeMessage }}</p>
        </div>
      </div>
      <div
        v-else
        class="alert alert-error !w-auto inline-flex fixed z-50 top-3 left-1/2 -translate-x-1/2 items-center gap-4 px-6 py-3 shadow-lg"
        role="alert"
      >
        <div class="flex flex-col items-center sm:flex-row gap-2">
          <div class="flex gap-1 items-center">
            <span class="icon-[tabler--alert-triangle] shrink-0 size-6"></span>
            <p class="text-lg font-semibold">Error:</p>
          </div>
          <p class="text-lg">{{ modeMessage }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
