<script setup>
import { useRouter } from 'vue-router'
import { useToastStore } from '@/stores/toastStore'
import { Form, useForm, Field, ErrorMessage } from 'vee-validate'
import { schema } from '@/validations/loginSchema'
import axios from 'axios'

import Toast from '@/components/Toast.vue'

const router = useRouter()
const toast = useToastStore()
const { open } = toast

const { handleSubmit, setValues, resetForm } = useForm({
  validationSchema: schema,
})

const BASE_URL = import.meta.env.VITE_API_BASE_URL

const login = handleSubmit(async (values) => {
  try {
    const result = await axios.post(`${BASE_URL}/api/login`, values)
    console.log(result)
    if (result.data?.status != 1) {
      open('Failed to login, please try again', 'error')
      resetForm()
      return
    }
    const token = result.data?.data
    localStorage.setItem('kumo', token)
    router.push('/')
  } catch (error) {}
})
</script>

<template>
  <Toast />
  <div class="h-screen flex justify-center items-center">
    <div class="w-md p-6 flex flex-col justify-center items-center border border-primary">
      <div class="flex items-center mb-8">
        <span class="icon-[tabler--cloud-download] size-12 me-3"></span>
        <h3 class="drawer-title text-3xl font-semibold">KUMO</h3>
      </div>
      <div class="mb-9">
        <div class="w-96 mb-2">
          <label class="label-text" for="username">Username</label>
          <Field type="text" value="admin" id="username" name="username" class="input" />
          <ErrorMessage class="helper-text text-error" name="username" />
        </div>
        <div class="w-96 mb-2">
          <label class="label-text" for="password">Password</label>
          <Field type="password" class="input" name="password" value="admin" id="password" />
          <ErrorMessage class="helper-text text-error" name="password" />
        </div>
      </div>
      <button type="button" class="btn btn-primary w-1/2 mx-auto" @click="login">Login</button>
    </div>
  </div>
</template>
