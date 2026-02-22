<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
  page: { type: Number, required: true },
  current: { type: Number, required: true },
})
const pageArr = computed(() => {
  return [...Array(props.page).keys()].map((i) => i + 1)
})
const emit = defineEmits(['emit-changePage'])
const changePage = (n) => {
  emit('emit-changePage', n)
}
const goPrev = () => {
  if (props.current > 1) {
    changePage(props.current - 1)
  }
}
const goNext = () => {
  if (props.current < props.page) {
    changePage(props.current + 1)
  }
}
</script>

<template>
  <div class="absolute bottom-25 md:bottom-10 left-0 w-full flex justify-center">
    <nav class="join">
      <button
        type="button"
        class="btn btn-text btn-square join-item"
        aria-label="Previous Button"
        :disabled="current == 1"
        @click="goPrev"
      >
        <span class="icon-[tabler--chevron-left] size-5 rtl:rotate-180"></span>
      </button>
      <button
        type="button"
        class="btn btn-text join-item btn-square aria-[current='page']:text-bg-success"
        :aria-current="n == current ? 'page' : null"
        v-for="n in pageArr"
        :key="n"
        @click="changePage(n)"
      >
        {{ n }}
      </button>
      <button
        type="button"
        class="btn btn-text btn-square join-item"
        aria-label="Next Button"
        :disabled="current === page"
        @click="goNext"
      >
        <span class="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
      </button>
    </nav>
  </div>
</template>
