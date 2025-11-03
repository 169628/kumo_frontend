<script setup></script>

<template>
  <nav class="join">
    <button type="button" class="btn btn-soft btn-square join-item" aria-label="Previous Button">
      <span class="icon-[tabler--chevron-left] size-5 rtl:rotate-180"></span>
    </button>
    <button
      type="button"
      class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-soft-primary"
    >
      1
    </button>
    <button
      type="button"
      class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-soft-primary"
      aria-current="page"
    >
      2
    </button>
    <button
      type="button"
      class="btn btn-soft join-item btn-square aria-[current='page']:text-bg-soft-primary"
    >
      3
    </button>
    <button type="button" class="btn btn-soft btn-square join-item" aria-label="Next Button">
      <span class="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
    </button>
  </nav>
</template>
