<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="accordion accordion-shadow">
    <div class="accordion-item" id="avatar1-arrow-right">
      <div
        class="accordion-toggle inline-flex items-center justify-between text-start cursor-default"
      >
        <div class="w-full flex">
          <div class="flex-1">
            <p class="mb-0.5">ID</p>
            <p class="text-sm text-base-content/50 font-normal">123456</p>
          </div>
          <div class="flex-1">
            <p class="mb-0.5">Brand</p>
            <p class="text-sm text-base-content/50 font-normal">B phone</p>
          </div>
          <div class="flex-1">
            <p class="mb-0.5">Model</p>
            <p class="text-sm text-base-content/50 font-normal">B 17</p>
          </div>
          <div class="hidden lg:flex sm:w-2/3">
            <div class="flex-1">
              <p class="mb-0.5">SV</p>
              <p class="text-sm text-base-content/50 font-normal">V1.1</p>
            </div>
            <div class="flex-1">
              <p class="mb-0.5">TV</p>
              <p class="text-sm text-base-content/50 font-normal">V2.0</p>
            </div>
            <div class="flex-1">
              <p class="mb-0.5">Size</p>
              <p class="text-sm text-base-content/50 font-normal">100 MB</p>
            </div>
            <div class="flex-1">
              <p class="mb-0.5">Update at</p>
              <p class="text-sm text-base-content/50 font-normal">2025-11-2</p>
            </div>
            <div class="flex-1">
              <p class="mb-0.5">action</p>
              <p class="text-sm text-base-content/50 font-normal">XXX</p>
            </div>
          </div>
        </div>
        <span
          class="icon-[tabler--chevron-left] lg:hidden accordion-item-active:-rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:-rotate-180"
          aria-controls="avatar1-arrow-right-collapse"
          aria-expanded="true"
        ></span>
      </div>
      <div class="lg:hidden">
        <div
          id="avatar1-arrow-right-collapse"
          class="accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
          aria-labelledby="avatar1-arrow-right"
          role="region"
        >
          <div class="w-full py-4 px-5 flex">
            <div class="flex-1">
              <p class="mb-0.5">SV</p>
              <p class="text-sm text-base-content/50 font-normal">V1.1</p>
            </div>
            <div class="flex-1">
              <p class="mb-0.5">TV</p>
              <p class="text-sm text-base-content/50 font-normal">V2.0</p>
            </div>
            <div class="flex-1">
              <p class="mb-0.5">Size</p>
              <p class="text-sm text-base-content/50 font-normal">100 MB</p>
            </div>
            <div class="flex-1">
              <p class="mb-0.5">Update at</p>
              <p class="text-sm text-base-content/50 font-normal">2025-11-2</p>
            </div>
            <div class="flex-1">
              <p class="mb-0.5">action</p>
              <p class="text-sm text-base-content/50 font-normal">XXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
