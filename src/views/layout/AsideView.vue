<script setup>
import { ref } from 'vue'
import Toast from '@/components/Toast.vue'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="w-full min-h-screen flex">
    <Toast />

    <!-- mobile backdrop -->
    <transition name="fade">
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="sidebarOpen = false"
      ></div>
    </transition>

    <!-- Sidebar -->
    <aside
      class="fixed lg:relative flex flex-col w-64 max-w-64 h-screen border-r border-oklch-200 bg-base-100 z-50 transition-transform duration-300 lg:translate-x-0"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
    >
      <div class="drawer-header">
        <div class="w-full flex items-center">
          <div class="flex items-center">
            <span class="icon-[tabler--cloud-download] size-12 me-3"></span>
            <h3 class="drawer-title text-3xl font-semibold">KUMO</h3>
          </div>

          <button
            type="button"
            class="btn btn-text btn-circle btn-sm md:hidden ms-auto"
            aria-label="Close"
            @click="sidebarOpen = false"
          >
            <span class="icon-[tabler--x] size-5"></span>
          </button>
        </div>
      </div>
      <div class="drawer-body flex flex-col px-2">
        <ul class="menu p-0">
          <li>
            <RouterLink
              to="/"
              active-class="font-bold bg-neutral/10"
              exact-active-class="font-bold bg-neutral/10"
              @click="sidebarOpen = false"
            >
              <span class="icon-[tabler--chart-bar-popular] size-5"></span>
              Dashbord
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/campaign"
              active-class="font-bold bg-neutral/10"
              @click="sidebarOpen = false"
            >
              <span class="icon-[tabler--subtask] size-5"></span>
              Campaigns
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/device"
              active-class="font-bold bg-neutral/10"
              @click="sidebarOpen = false"
            >
              <span class="icon-[tabler--report-search] size-5"></span>
              Devices
            </RouterLink>
          </li>
        </ul>
        <div class="mt-auto px-4 text-sm flex flex-col items-center">
          <p>Copyright © 2026</p>
          <p>
            All Right Reserved
            <a href="https://github.com/169628" target="_blank" class="text-success font-bold">
              Kumo
            </a>
          </p>
        </div>
      </div>
    </aside>

    <div class="flex-1 w-full pt-6 md:pt-8 px-6 lg:px-8 relative">
      <RouterView />
    </div>

    <!-- mobile footer -->
    <div class="fixed bottom-0 left-0 w-full border-t border-oklch-200 lg:hidden">
      <button
        type="button"
        class="btn btn-text max-lg:btn-square lg:hidden"
        @click="sidebarOpen = true"
      >
        <span class="icon-[tabler--menu-2] size-5"></span>
      </button>
    </div>
  </div>
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
