<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref, computed, watch } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import axios from 'axios'

import LogModal from '@/components/LogModal.vue'
import Pagination from '@/components/Pagination.vue'
import Table from '@/components/Table.vue'

const allDeviceList = ref([])
const keyword = ref('')
const pageSize = 5
const currentPage = ref(1)
const dropdown = ref(null)
// for log modal
const logModal = ref(false)
const device = ref({})

const toast = useToastStore()
const { open } = toast

const router = useRouter()

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const token = localStorage.getItem('kumo')
const header = { headers: { Authorization: `Bearer ${token}` } }

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
    key: 'firstConnect',
    class: 'hidden xl:table-cell',
    title: 'FIRST CONNECT',
  },
  {
    key: 'reportedAt',
    class: 'hidden xl:table-cell',
    title: 'LAST CONNECT',
  },
]
// RWD toggle dropdown
const toggleDropdown = (no) => {
  if (dropdown.value == no) {
    dropdown.value = null
  } else {
    dropdown.value = no
  }
}
// get all data from backend
const renderDeviceList = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/api/device`, header)

    if (result.data?.status == 2) {
      localStorage.removeItem('kumo')
      await router.push('/')
      return
    } else if (result.data?.status != 1) {
      return open('Something wrong!', 'error')
    }
    allDeviceList.value = result.data?.data
    currentPage.value = 1
  } catch (error) {
    console.log(error)
    open(error, 'error')
  }
}
// the keyword list
const deviceList = computed(() => {
  const k = keyword.value.toLowerCase()

  if (!k) return allDeviceList.value

  return allDeviceList.value.filter((item) => {
    return (
      item.sn.toLowerCase().includes(k) ||
      item.brand?.toLowerCase().includes(k) ||
      item.model?.toLowerCase().includes(k)
    )
  })
})
// for the pagination
const totalPage = computed(() => {
  return Math.ceil(deviceList.value.length / pageSize)
})
// only show 'pageSize' data to this page
const pagedDeviceList = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return deviceList.value.slice(start, end)
})
// page from Pagination
const changePage = (n) => {
  if (!n) return
  currentPage.value = n
}
// if keyword changed back to page 1
watch(keyword, () => {
  currentPage.value = 1
})

const showLog = (item) => {
  logModal.value = true
  device.value = item
}
const closeLogModal = (status) => {
  device.value = {}
  logModal.value = status
}

onMounted(() => {
  renderDeviceList()
})
</script>

<template>
  <LogModal :show="logModal" :device="device" @emit-close="closeLogModal" />
  <div class="flex justify-between mb-6 px-5">
    <h1 class="text-2xl">Device</h1>
  </div>
  <!-- Search -->
  <div class="pl-5 mb-6">
    <div
      class="input input-lg flex max-w-sm space-x-4 focus-within:outline focus-within:outline-2 focus-within:outline-success focus-within:outline-offset-0 focus-within:ring-0 focus-within:border-transparent"
    >
      <span class="icon-[tabler--search] text-base-content/80 my-auto size-6 shrink-0"></span>
      <input
        type="search"
        class="grow focus:outline-none focus:ring-0"
        placeholder="Search By SN or Brand or Model"
        id="kbdInput"
        v-model="keyword"
      />
      <label class="sr-only" for="kbdInput">Search</label>
    </div>
  </div>
  <Table :columns="columns" :rows="pagedDeviceList">
    <template #arrow="{ row }">
      <td class="xl:hidden">
        <span
          class="icon-[tabler--chevron-right] size-5"
          :class="dropdown == row.deviceId && 'rotate-90'"
          @click="toggleDropdown(row.deviceId)"
        ></span>
      </td>
    </template>
    <template #sn="{ value, row }">
      <td>
        <a href="#" @click.prevent="showLog(row)" class="link text-success">{{ value }}</a>
      </td>
    </template>
    <template #sv="{ value }">
      <td class="hidden lg:table-cell">{{ value }}</td>
    </template>
    <template #status="{ value }">
      <td class="hidden lg:table-cell">{{ value }}</td>
    </template>
    <template #firstConnect="{ value }">
      <td class="hidden xl:table-cell">{{ value }}</td>
    </template>
    <template #reportedAt="{ value }">
      <td class="hidden xl:table-cell">{{ value }}</td>
    </template>

    <template #hiddenArea="{ row }">
      <td colspan="4" class="xl:hidden">
        <Transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
        >
          <ul v-if="dropdown == row.deviceId">
            <li class="lg:hidden">
              <span class="font-medium tracking-wider">SV:</span> {{ row.sv }}
            </li>
            <li class="lg:hidden">
              <span class="font-medium tracking-wider">STATUS:</span> {{ row.status }}
            </li>
            <li class="xl:hidden">
              <span class="font-medium tracking-wider">FIRST CONNECT:</span> {{ row.firstConnect }}
            </li>
            <li class="xl:hidden">
              <span class="font-medium tracking-wider">LAST CONNECT:</span> {{ row.reportedAt }}
            </li>
          </ul>
        </Transition>
      </td>
    </template>
  </Table>
  <Pagination :page="totalPage" :current="currentPage" @emit-changePage="changePage" />
</template>
