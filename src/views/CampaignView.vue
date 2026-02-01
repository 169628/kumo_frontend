<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import Pagination from '@/components/Pagination.vue'
import Table from '@/components/Table.vue'
import Modal from '@/components/Modal.vue'

const campaignList = ref([])

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const columns = [
  {
    key: 'arrow',
    class: 'xl:hidden',
    title: '',
  },
  {
    key: 'isEnabled',
    class: '',
    title: 'ENABLED',
  },
  {
    key: 'no',
    class: '',
    title: 'NO.',
  },
  {
    key: 'brand',
    class: '',
    title: 'BRAND',
  },
  {
    key: 'model',
    class: '',
    title: 'MODEL',
  },
  {
    key: 'sv',
    class: 'hidden md:table-cell',
    title: 'SV',
  },
  {
    key: 'tv',
    class: 'hidden lg:table-cell',
    title: 'TV',
  },
  {
    key: 'fileSize',
    class: 'hidden lg:table-cell',
    title: 'SIZE',
  },
  {
    key: 'createAt',
    class: 'hidden xl:table-cell',
    title: 'CREATE AT',
  },
  {
    key: 'updateAt',
    class: 'hidden xl:table-cell',
    title: 'UPDATE AT',
  },
  {
    key: 'actions',
    class: 'hidden xl:table-cell',
    title: 'ACTIONS',
  },
]
const renderCampaignList = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/campaign`)
    console.log(result.data)
    // TODO if the message is failed
    campaignList.value = result.data
  } catch (error) {
    console.log(error)
    // TODO toast failed
  }
}
onMounted(() => {
  renderCampaignList()
})
</script>

<template>
  <div class="flex justify-between mb-6 px-5">
    <h1 class="text-2xl">Campaign</h1>
    <Modal />
  </div>
  <div class="pl-5 mb-6">
    <div
      class="input input-lg flex max-w-sm space-x-4 focus-within:outline focus-within:outline-2 focus-within:outline-success focus-within:outline-offset-0 focus-within:ring-0 focus-within:border-transparent"
    >
      <span class="icon-[tabler--search] text-base-content/80 my-auto size-6 shrink-0"></span>
      <input
        type="search"
        class="grow focus:outline-none focus:ring-0"
        placeholder="Search"
        id="kbdInput"
      />
      <label class="sr-only" for="kbdInput">Search</label>
    </div>
  </div>
  <Table :columns="columns" :rows="campaignList">
    <template #arrow>
      <td class="xl:hidden">
        <span class="icon-[tabler--chevron-right] size-5"></span>
        <span class="icon-[tabler--chevron-down] size-5"></span>
      </td>
    </template>
    <template #isEnabled="{ value }">
      <td>
        <input
          type="checkbox"
          class="switch switch-success"
          id="switchSuccess1"
          :checked="value == 'true'"
        />
      </td>
    </template>
    <template #sv="{ value }">
      <td class="hidden md:table-cell">{{ value }}</td>
    </template>
    <template #tv="{ value }">
      <td class="hidden lg:table-cell">{{ value }}</td>
    </template>
    <template #file_size="{ value }">
      <td class="hidden lg:table-cell">{{ value }}</td>
    </template>
    <template #create_at="{ value }">
      <td class="hidden xl:table-cell">{{ value }}</td>
    </template>
    <template #update_at="{ value }">
      <td class="hidden xl:table-cell">{{ value }}</td>
    </template>
    <template #actions>
      <td class="hidden xl:table-cell">
        <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
          <span class="icon-[tabler--pencil] size-5"></span>
        </button>
        <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
          <span class="icon-[tabler--trash] size-5"></span>
        </button>
      </td>
    </template>
    <template #hiddenArea="{ row }">
      <td colspan="4" class="xl:hidden">
        <ul>
          <li class="md:hidden">
            <span class="font-medium tracking-wider">SV:</span> {{ row.sv }}
          </li>
          <li class="lg:hidden">
            <span class="font-medium tracking-wider">TV:</span> {{ row.tv }}
          </li>
          <li class="lg:hidden">
            <span class="font-medium tracking-wider">SIZE:</span> {{ row.fileSize }}
          </li>
          <li class="xl:hidden">
            <span class="font-medium tracking-wider">CREATE AT:</span> {{ row.createAt }}
          </li>
          <li class="xl:hidden">
            <span class="font-medium tracking-wider">UPDATE AT:</span> {{ row.updateAt }}
          </li>
          <li class="xl:hidden">
            <span class="font-medium tracking-wider">ACTIONS:</span>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
              <span class="icon-[tabler--pencil] size-5"></span>
            </button>
            <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
              <span class="icon-[tabler--trash] size-5"></span>
            </button>
          </li>
        </ul>
      </td>
    </template>
  </Table>
  <Pagination />
</template>
