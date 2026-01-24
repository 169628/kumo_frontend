<script setup>
import Toast from '@/components/Toast.vue'
</script>

<template>
  <div class="w-full min-h-screen flex">
    <aside
      id="logo-sidebar"
      class="overlay [--auto-close:md] md:shadow-none overlay-open:translate-x-0 drawer drawer-start hidden max-w-64 md:flex md:translate-x-0 border-r border-oklch-200 md:relative md:h-screen"
      role="dialog"
      tabindex="-1"
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
            data-overlay="#logo-sidebar"
          >
            <span class="icon-[tabler--x] size-5"></span>
          </button>
        </div>
      </div>
      <div class="drawer-body flex flex-col px-2">
        <ul class="menu p-0">
          <li>
            <RouterLink to="/">
              <span class="icon-[tabler--chart-bar-popular] size-5"></span>
              Dashbord
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/campaign">
              <span class="icon-[tabler--subtask] size-5"></span>
              Campaigns
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/device">
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
    <div class="fixed bottom-0 left-0 w-full border-t border-oklch-200 md:hidden">
      <button
        type="button"
        class="btn btn-text max-md:btn-square md:hidden"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="logo-sidebar"
        data-overlay="#logo-sidebar"
      >
        <span class="icon-[tabler--menu-2] size-5"></span>
      </button>
    </div>
  </div>
</template>
