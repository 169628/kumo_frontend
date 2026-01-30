<script setup>
import Pagination from '@/components/Pagination.vue'
import Table from '@/components/Table.vue'
import Modal from '@/components/Modal.vue'

const columns = [
  {
    key: 'arrow',
    class: 'xl:hidden',
    title: '',
  },
  {
    key: 'enable',
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
    key: 'file_size',
    class: 'hidden lg:table-cell',
    title: 'SIZE',
  },
  {
    key: 'create_at',
    class: 'hidden xl:table-cell',
    title: 'CREATE AT',
  },
  {
    key: 'update_at',
    class: 'hidden xl:table-cell',
    title: 'UPDATE AT',
  },
  {
    key: 'actions',
    class: 'hidden xl:table-cell',
    title: 'ACTIONS',
  },
]
const campaignList = [
  {
    brand: 'Projector',
    model: 'L1',
    sv: 'v1.0.2',
    tv: 'v1.2.4',
    file: 'http://localhost:8080/kumo-servlet/example',
    file_size: '3983209',
    test_list: [],
    download_by_id: 1,
  },
  {
    brand: 'Projector',
    model: 'L2',
    sv: 'v1.1.0',
    tv: 'v1.3.0',
    file: 'http://localhost:8080/kumo-servlet/example',
    file_size: '5128430',
    is_test_mode: 1,
    test_list: ['QA-01', 'QA-02'],
    download_by_id: 2,
  },
  {
    brand: 'Projector',
    model: 'Pro L1',
    sv: 'v2.0.0',
    tv: 'v2.1.1',
    file: 'http://localhost:8080/kumo-servlet/example',
    file_size: '7421983',
    test_list: [],
    download_by_id: 1,
  },
  {
    brand: 'Monitor',
    model: 'Max',
    sv: 'v2.0.5',
    tv: 'v2.2.0',
    file: 'http://localhost:8080/kumo-servlet/example',
    file_size: '6893321',
    is_test_mode: 1,
    test_list: ['BETA-01'],
    download_by_id: 1,
  },
  {
    brand: 'Robot Vacuum',
    model: 'Pro L1',
    sv: 'v1.2.0',
    tv: 'v1.4.1',
    file: 'http://localhost:8080/kumo-servlet/example',
    file_size: '8349200',
    download_by_id: 2,
  },
]
</script>

<template>
  <div class="flex justify-between mb-6 px-5">
    <h1 class="text-2xl">Campaign</h1>
    <Modal />
  </div>
  <div class="pl-5">
    <div class="input input-lg flex max-w-sm space-x-4">
      <span class="icon-[tabler--search] text-base-content/80 my-auto size-6 shrink-0"></span>
      <input type="search" class="grow" placeholder="Search" id="kbdInput" />
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
    <template #enable>
      <td>
        <input type="checkbox" class="switch switch-success" id="switchSuccess1" checked />
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
            <span class="font-medium tracking-wider">SIZE:</span> {{ row.file_size }}
          </li>
          <li class="xl:hidden">
            <span class="font-medium tracking-wider">CREATE AT:</span> {{ row.create_at }}
          </li>
          <li class="xl:hidden">
            <span class="font-medium tracking-wider">UPDATE AT:</span> {{ row.update_at }}
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
