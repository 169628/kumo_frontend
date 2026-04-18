<script setup>
import { useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { Form, useForm, Field, ErrorMessage } from 'vee-validate'
import { schema } from '@/validations/campaignSchema'
import { useToastStore } from '@/stores/toastStore'
import axios from 'axios'
import { formatFileSize } from '@/utils/format'

const props = defineProps({
  show: Boolean,
  mode: String,
  campaign: Object,
  editNo: Number,
})
const testList = ref([])
const defaultCampaign = {
  isTestMode: true,
  downloadBy: 'wifi',
}
const oldCampaign = ref({})
const newCampaign = ref({ ...defaultCampaign })
const hasExistingFile = ref(false)
// vee-validate
const { handleSubmit, setValues, resetForm } = useForm({
  validationSchema: schema,
})

const toast = useToastStore()
const { open } = toast

const router = useRouter()

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const token = localStorage.getItem('kumo')
const header = { headers: { Authorization: `Bearer ${token}` } }

// for close modal
const emit = defineEmits(['emit-close', 'emit-refresh'])
const close = () => {
  resetForm()
  testList.value = []
  newCampaign.value = { ...defaultCampaign }
  hasExistingFile.value = false
  oldCampaign.value = {}
  emit('emit-close', false)
}

const refresh = () => {
  emit('emit-refresh', true)
}
// for modal test device part
const addTestList = () => {
  if (testList.value.length < 3) {
    testList.value.push('')
  }
}
const removeTestList = (index) => {
  if (testList.value.length > 1) {
    testList.value.splice(index, 1)
  }
}

const removeFile = (setValue) => {
  setValue(null)
  newCampaign.value.fileSize = 0
  hasExistingFile.value = false
}
// for Create Campaign & Edit Campaign
const campaignHandler = handleSubmit(async (values) => {
  try {
    const { file } = values
    const payload = {}
    if (values.brand != oldCampaign.value.brand) {
      payload.brand = values.brand
    }
    if (values.model != oldCampaign.value.model) {
      payload.model = values.model
    }
    if (values.sv != oldCampaign.value.sv) {
      payload.sv = values.sv
    }
    if (values.tv != oldCampaign.value.tv) {
      payload.tv = values.tv
    }
    if (file instanceof File) {
      payload.uploadData = file
    }
    if (newCampaign.value.isTestMode != oldCampaign.value.isTestMode) {
      payload.isTestMode = newCampaign.value.isTestMode
    }
    if (JSON.stringify(testList.value) !== JSON.stringify(oldCampaign.value.testList)) {
      payload.testList = testList.value
    }
    if (newCampaign.value.downloadBy != oldCampaign.value.downloadBy) {
      payload.downloadById = newCampaign.value.downloadBy == 'wifi' ? 1 : 2
    }

    let result
    if (props.mode == 'create') {
      const formData = new FormData()
      const { uploadData, ...campaignData } = payload
      formData.append(
        'campaign',
        new Blob([JSON.stringify(campaignData)], { type: 'application/json' }),
      )
      if (uploadData instanceof File) {
        formData.append('uploadData', uploadData)
      }
      result = await axios.post(`${BASE_URL}/api/campaign`, formData, header)
    } else {
      const formData = new FormData()
      const { uploadData, ...campaignData } = payload
      formData.append(
        'campaign',
        new Blob([JSON.stringify(campaignData)], { type: 'application/json' }),
      )
      if (uploadData instanceof File) {
        formData.append('uploadData', uploadData)
      }
      result = await axios.put(`${BASE_URL}/api/campaign/${props.campaign?.campaignId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
    }

    if (result.data?.status == 2) {
      localStorage.removeItem('kumo')
      await router.push('/')
      return
    } else if (result.data?.status != 1) {
      refresh()
      close()
      return open(`${props.mode.toLowerCase()} failed!!`, 'error')
    }
    refresh()
    close()
    return open(`${props.mode.toLowerCase()} success!!`)
  } catch (error) {
    console.log(error)
    refresh()
    close()
    open(`${props.mode.toLowerCase()} failed!!`, 'error')
  }
})

// for EditCampaign
watch(
  () => props.show,
  async (visible) => {
    if (visible && props.mode == 'edit' && props.editNo) {
      try {
        const result = await axios.get(
          `${BASE_URL}/api/campaign/${props.campaign?.campaignId}`,
          header,
        )

        if (result.data?.status == 2) {
          localStorage.removeItem('kumo')
          await router.push('/')
          return
        } else if (result.data?.status != 1) {
          close()
          return open('error, can not find the campaign!!', 'error')
        }
        oldCampaign.value = result.data?.data
        const { brand, model, sv, tv, downloadBy, file, fileSize, isTestMode } = result.data?.data
        if (file && fileSize) {
          hasExistingFile.value = true
        }
        setValues({
          brand,
          model,
          sv,
          tv,
          file,
        })
        testList.value = [...result.data?.data?.testList]
        newCampaign.value = {
          ...newCampaign.value,
          isTestMode,
          downloadBy,
          fileSize,
        }
      } catch (error) {
        console.log(error)
        refresh()
        close()
        open('error!!!', 'error')
      }
    }
  },
)
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="fixed inset-0 z-90 flex py-12 justify-center">
      <div class="absolute inset-0 bg-black/50" @click="close"></div>

      <!-- Modal -->
      <div
        class="relative bg-base-100 w-full max-w-lg rounded-xl shadow-xl z-10 max-h-[90vh] flex flex-col"
      >
        <!-- Header -->
        <div class="flex justify-between items-center p-6 border-b">
          <h3 v-if="mode == 'create'" class="text-2xl font-semibold">Create Campaign</h3>
          <h3 v-else class="text-2xl font-semibold">Edit Campaign No. {{ props.editNo }}</h3>

          <button class="text-gray-400 hover:text-gray-700" @click="close">✕</button>
        </div>

        <!-- Body -->
        <div class="flex-1 overflow-y-auto pt-8 pb-7 px-12">
          <div class="select-floating w-full mb-6">
            <Field class="select" name="brand" as="select">
              <option value="">Please select</option>
              <option value="Projector">Projector</option>
              <option value="Monitor">Monitor</option>
              <option value="Robot Vacuum">Robot Vacuum</option>
            </Field>
            <label class="select-floating-label">BRAND</label>
            <ErrorMessage class="helper-text text-error" name="brand" />
          </div>
          <div class="select-floating w-full mb-6">
            <Field class="select" name="model" as="select">
              <option value="">Please select</option>
              <option value="L1">L1</option>
              <option value="Pro L1">Pro L1</option>
              <option value="Max">Max</option>
            </Field>
            <label class="select-floating-label" for="selectStateErrorFloating">MODEL</label>
            <ErrorMessage class="helper-text text-error" name="model" />
          </div>
          <div class="input-floating w-full mb-6">
            <Field type="text" placeholder="v0.0.1" class="input rounded-2xl" name="sv" />
            <label class="input-floating-label" for="pillFloatingInput">SV</label>
            <ErrorMessage class="helper-text text-error" name="sv" />
          </div>
          <div class="input-floating w-full mb-6">
            <Field type="text" placeholder="v1.1.1" class="input rounded-2xl" name="tv" />
            <label class="input-floating-label" for="pillFloatingInput">TV</label>
            <ErrorMessage class="helper-text text-error" name="tv" />
          </div>

          <div class="w-full mb-6">
            <label class="label-text">Upload File</label>
            <Field name="file" v-slot="{ handleChange, setValue, value }">
              <div
                v-if="hasExistingFile"
                class="flex items-center justify-between bg-base-200 p-3 rounded-xl"
              >
                <div>
                  <p class="font-medium">{{ value }}</p>
                  <p class="text-sm text-gray-500">
                    {{ formatFileSize(newCampaign.fileSize) }}
                  </p>
                </div>

                <button
                  type="button"
                  class="btn btn-sm btn-primary rounded-2xl"
                  @click="removeFile(setValue)"
                >
                  Remove
                </button>
              </div>
              <input v-else type="file" class="input" accept="image/*" @change="handleChange" />
            </Field>
            <ErrorMessage class="helper-text text-error" name="file" />
          </div>
          <div class="flex items-center gap-1 mb-4">
            <input type="checkbox" class="switch switch-info" v-model="newCampaign.isTestMode" />
            <label class="label-text text-base">TEST MODE</label>
          </div>
          <div class="mb-6">
            <p class="mb-4">
              Test Devices SN:
              <span class="text-base-content font-medium">(Maximum 3)</span>
            </p>
            <div class="w-full space-y-3">
              <div v-for="(device, index) in testList" :key="index" class="flex items-center gap-2">
                <input
                  type="text"
                  class="input"
                  placeholder="Enter Device SN"
                  v-model="testList[index]"
                />
                <button
                  class="btn btn-square btn-outline btn-info"
                  @click="removeTestList(index)"
                  :disabled="testList.length == 1"
                >
                  <span class="icon-[tabler--x]"></span>
                </button>
              </div>
            </div>
            <div class="flex w-full justify-end gap-2 mt-4">
              <button
                type="button"
                class="btn btn-sm btn-primary rounded-2xl"
                @click="addTestList"
                :disabled="testList.length >= 3"
              >
                <span class="icon-[tabler--plus]"></span>
                ADD DEVICE
              </button>
            </div>
          </div>
          <div class="flex">
            <label class="label-text text-base">Download By: </label>
            <div class="join drop-shadow">
              <input
                class="join-item btn btn-soft"
                type="radio"
                aria-label="Wifi"
                value="wifi"
                v-model="newCampaign.downloadBy"
              />
              <input
                class="join-item btn btn-soft"
                type="radio"
                aria-label="User"
                value="user"
                v-model="newCampaign.downloadBy"
              />
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-6 border-t flex justify-end gap-3">
          <slot name="footer">
            <button type="button" class="btn btn-soft" @click="close">Cancel</button>
            <button
              type="button"
              v-if="mode == 'create'"
              class="btn btn-primary"
              @click="campaignHandler"
            >
              Create
            </button>
            <button type="button" v-else class="btn btn-primary" @click="campaignHandler">
              Save
            </button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
