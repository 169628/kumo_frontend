<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'
import axios from 'axios'

import CampaignModal from '@/components/CampaignModal.vue'
import Pagination from '@/components/Pagination.vue'
import Table from '@/components/Table.vue'
import Toast from '@/components/Toast.vue'

// for campaign list
const allCampaignList = ref([])
const keyword = ref('')
const pageSize = 5
const currentPage = ref(1)
const dropdown = ref(null)
// for create & edit modal
const modalValue = ref(false)
const modalMode = ref('Create')
const editNo = ref(0)

const BASE_URL = import.meta.env.VITE_API_BASE_URL

// for campaign table format
const columns = [
  {
    key: 'arrow',
    class: '2xl:hidden',
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
    class: 'hidden 2xl:table-cell',
    title: 'UPDATE AT',
  },
  {
    key: 'actions',
    class: 'hidden 2xl:table-cell',
    title: 'ACTIONS',
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
const renderCampaignList = async () => {
  try {
    const result = await axios.get(`${BASE_URL}/campaign/getAll`)
    // TODO if the message is failed
    allCampaignList.value = result.data?.campaign
  } catch (error) {
    console.log(error)
    // TODO failed toast
  }
}
// the keyword list
const campaignList = computed(() => {
  const k = keyword.value.toLowerCase()

  if (!k) return allCampaignList.value

  return allCampaignList.value.filter((item) => {
    return (
      item.no.toString().includes(k) ||
      item.brand?.toLowerCase().includes(k) ||
      item.model?.toLowerCase().includes(k)
    )
  })
})
// for the pagination
const totalPage = computed(() => {
  return Math.ceil(campaignList.value.length / pageSize)
})
// only show 'pageSize' data to this page
const pagedCampaignList = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize

  return campaignList.value.slice(start, end)
})
// page from Pagination
const chagePage = (n) => {
  if (!n) return
  currentPage.value = n
}
// if keyword changed back to page 1
watch(keyword, () => {
  currentPage.value = 1
})

const createModal = () => {
  modalMode.value = 'Create'
  editNo.value = 0
  modalValue.value = true
}
const closeModal = (status) => {
  modalValue.value = status
}

const refresh = (status) => {
  if (status) renderCampaignList()
}

const editModal = (campainNo) => {
  modalMode.value = 'Edit'
  editNo.value = campainNo
  modalValue.value = true
}

onMounted(() => {
  renderCampaignList()
})
</script>

<template>
  <!-- <Toast /> -->
  <CampaignModal
    :show="modalValue"
    :mode="modalMode"
    :editNo="editNo"
    @emit-close="closeModal"
    @emit-refresh="refresh"
  />
  <div class="flex justify-between mb-6 px-5">
    <h1 class="text-2xl">Campaign</h1>
    <!-- Create Button -->
    <button type="button" class="btn btn-success" @click="createModal">Create New</button>
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
        placeholder="Search By No. or Brand or Model"
        id="kbdInput"
        v-model="keyword"
      />
      <label class="sr-only" for="kbdInput">Search</label>
    </div>
  </div>
  <Table :columns="columns" :rows="pagedCampaignList">
    <template #arrow="{ row }">
      <td class="2xl:hidden">
        <span
          class="icon-[tabler--chevron-right] size-5"
          :class="dropdown == row.no && 'rotate-90'"
          @click="toggleDropdown(row.no)"
        ></span>
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
    <template #fileSize="{ value }">
      <td class="hidden lg:table-cell">{{ value }}</td>
    </template>
    <template #createAt="{ value }">
      <td class="hidden xl:table-cell">{{ value }}</td>
    </template>
    <template #updateAt="{ value }">
      <td class="hidden 2xl:table-cell">{{ value }}</td>
    </template>
    <template #actions="{ row }">
      <td class="hidden 2xl:table-cell">
        <button
          class="btn btn-circle btn-text btn-sm"
          @click="editModal(row.no)"
          aria-label="Action button"
        >
          <span class="icon-[tabler--pencil] size-5"></span>
        </button>
        <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
          <span class="icon-[tabler--trash] size-5"></span>
        </button>
      </td>
    </template>
    <template #hiddenArea="{ row }">
      <td colspan="4" class="2xl:hidden">
        <Transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
        >
          <ul v-if="dropdown == row.no">
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
            <li class="2xl:hidden">
              <span class="font-medium tracking-wider">UPDATE AT:</span> {{ row.updateAt }}
            </li>
            <li class="2xl:hidden">
              <span class="font-medium tracking-wider">ACTIONS:</span>
              <button
                class="btn btn-circle btn-text btn-sm"
                @click="editModal(row.no)"
                aria-label="Action button"
              >
                <span class="icon-[tabler--pencil] size-5"></span>
              </button>
              <button class="btn btn-circle btn-text btn-sm" aria-label="Action button">
                <span class="icon-[tabler--trash] size-5"></span>
              </button>
            </li></ul
        ></Transition>
      </td>
    </template>
  </Table>
  <Pagination :page="totalPage" :current="currentPage" @emit-changePage="chagePage" />
</template>
