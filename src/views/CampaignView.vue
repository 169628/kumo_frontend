<script setup>
import Pagination from '@/components/Pagination.vue'
import Table from '@/components/Table.vue'
import Modal from '@/components/Modal.vue'
</script>

<template>
  <div class="flex justify-between mb-6 px-5">
    <h1 class="text-2xl">Campaign</h1>
    <Modal />
  </div>
  <Table />
  <Pagination />
</template>
