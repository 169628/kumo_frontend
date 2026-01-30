<script setup>
import Pagination from '@/components/Pagination.vue'
import Table from '@/components/Table.vue'

const columns = [
  {
    key: 'arrow',
    class: 'xl:hidden',
    title: '',
  },
  {
    key: 'sn',
    class: '',
    title: 'SN',
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
    class: 'hidden lg:table-cell',
    title: 'SV',
  },
  {
    key: 'status',
    class: 'hidden lg:table-cell',
    title: 'STATUS',
  },
  {
    key: 'first_connect',
    class: 'hidden xl:table-cell',
    title: 'FIRST CONNECT',
  },
  {
    key: 'reported_at',
    class: 'hidden xl:table-cell',
    title: 'LAST CONNECT',
  },
]
const deviceList = [
  {
    device_id: 123456789012345670,
    sn: 'kumotest2507',
    brand: 'Projector',
    model: 'L1',
    sv: 'v1.0.2',
    first_connect: '2023-11-01',
    status: 'success',
    reported_at: '2026-01-13',
  },
  {
    device_id: 123456789012345671,
    sn: 'kumotest2508',
    brand: 'Projector',
    model: 'L1',
    sv: 'v1.0.2',
    first_connect: '2023-11-05',
    status: 'success',
    reported_at: '2026-01-13',
  },
  {
    device_id: 123456789012345672,
    sn: 'kumotest2509',
    brand: 'Projector',
    model: 'L1',
    sv: 'v1.0.1',
    first_connect: '2023-11-10',
    status: 'failed',
    reported_at: '2026-01-12',
  },
  {
    device_id: 123456789012345673,
    sn: 'kumotest2510',
    brand: 'Projector',
    model: 'L2',
    sv: 'v1.1.0',
    first_connect: '2023-11-15',
    status: 'success',
    reported_at: '2026-01-14',
  },
  {
    device_id: 123456789012345674,
    sn: 'kumotest2511',
    brand: 'Projector',
    model: 'L2',
    sv: 'v1.1.0',
    first_connect: '2023-11-20',
    status: 'pending',
    reported_at: '2026-01-14',
  },
  {
    device_id: 123456789012345675,
    sn: 'kumotest2512',
    brand: 'Projector',
    model: 'L3',
    sv: 'v2.0.0',
    first_connect: '2023-12-01',
    status: 'success',
    reported_at: '2026-01-15',
  },
  {
    device_id: 123456789012345676,
    sn: 'kumotest2513',
    brand: 'Projector',
    model: 'L3',
    sv: 'v2.0.0',
    first_connect: '2023-12-05',
    status: 'success',
    reported_at: '2026-01-15',
  },
  {
    device_id: 123456789012345677,
    sn: 'kumotest2514',
    brand: 'Projector',
    model: 'L3',
    sv: 'v2.0.1',
    first_connect: '2023-12-10',
    status: 'failed',
    reported_at: '2026-01-16',
  },
  {
    device_id: 123456789012345678,
    sn: 'kumotest2515',
    brand: 'Projector',
    model: 'L4',
    sv: 'v2.1.0',
    first_connect: '2023-12-15',
    status: 'success',
    reported_at: '2026-01-16',
  },
  {
    device_id: 123456789012345679,
    sn: 'kumotest2516',
    brand: 'Projector',
    model: 'L4',
    sv: 'v2.1.0',
    first_connect: '2023-12-20',
    status: 'pending',
    reported_at: '2026-01-17',
  },
]
</script>

<template>
  <div class="flex justify-between mb-6 px-5">
    <h1 class="text-2xl">Device</h1>
  </div>
  <Table :columns="columns" :rows="deviceList">
    <template #arrow>
      <td class="xl:hidden">
        <span class="icon-[tabler--chevron-right] size-5"></span>
        <span class="icon-[tabler--chevron-down] size-5"></span>
      </td>
    </template>
    <template #sn="{ value }">
      <td>
        <a href="#" class="link text-success">{{ value }}</a>
      </td>
    </template>
    <template #sv="{ value }">
      <td class="hidden lg:table-cell">{{ value }}</td>
    </template>
    <template #status="{ value }">
      <td class="hidden lg:table-cell">{{ value }}</td>
    </template>
    <template #first_connect="{ value }">
      <td class="hidden xl:table-cell">{{ value }}</td>
    </template>
    <template #reported_at="{ value }">
      <td class="hidden xl:table-cell">{{ value }}</td>
    </template>

    <template #hiddenArea="{ row }">
      <td colspan="4" class="xl:hidden">
        <ul>
          <li class="lg:hidden">
            <span class="font-medium tracking-wider">SV:</span> {{ row.sv }}
          </li>
          <li class="lg:hidden">
            <span class="font-medium tracking-wider">STATUS:</span> {{ row.status }}
          </li>
          <li class="xl:hidden">
            <span class="font-medium tracking-wider">FIRST CONNECT:</span> {{ row.first_connect }}
          </li>
          <li class="xl:hidden">
            <span class="font-medium tracking-wider">LAST CONNECT:</span> {{ row.reported_at }}
          </li>
        </ul>
      </td>
    </template>
  </Table>
  <Pagination />
</template>
