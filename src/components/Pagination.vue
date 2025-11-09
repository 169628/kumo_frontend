<script setup></script>

<template>
  <div class="absolute bottom-25 md:bottom-10 left-0 w-full flex justify-center">
    <nav class="join">
      <button type="button" class="btn btn-text btn-square join-item" aria-label="Previous Button">
        <span class="icon-[tabler--chevron-left] size-5 rtl:rotate-180"></span>
      </button>
      <button
        type="button"
        class="btn btn-text join-item btn-square aria-[current='page']:text-bg-soft-primary"
      >
        1
      </button>
      <button
        type="button"
        class="btn btn-text join-item btn-square aria-[current='page']:text-bg-success"
        aria-current="page"
      >
        2
      </button>
      <button
        type="button"
        class="btn btn-text join-item btn-square aria-[current='page']:text-bg-soft-primary"
      >
        3
      </button>
      <button type="button" class="btn btn-text btn-square join-item" aria-label="Next Button">
        <span class="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
      </button>
    </nav>
  </div>
</template>
