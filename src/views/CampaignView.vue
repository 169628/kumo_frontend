<script setup>
import Pagination from '@/components/Pagination.vue'
import Table from '@/components/Table.vue'
import Modal from '@/components/Modal.vue'
</script>

<template>
  <Modal />
  <div class="flex justify-between mb-5 px-5">
    <h1 class="text-2xl">CampaignView</h1>
    <button
      type="button"
      class="btn btn-success"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="basic-modal"
      data-overlay="#basic-modal"
    >
      Create New
    </button>
  </div>
  <Table />
  <Pagination />
</template>
