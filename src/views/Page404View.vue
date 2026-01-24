<script setup>
import { useRouter } from 'vue-router'

// Redirect to homepage after 2 seconds
const router = useRouter()
setTimeout(() => {
  router.push('/')
}, 2000)
</script>

<template>
  <div class="flex justify-between mb-6 px-5">
    <h1 class="text-2xl">404. That's an error.</h1>
  </div>
  <p>The resource requested could not be found on this server!</p>
</template>
