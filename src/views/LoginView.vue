<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const login = () => {
  const expires = new Date()
  expires.setDate(expires.getDate() + 3)
  // TODO 去後端拿 token
  const token = 'jpaodifjlwkejofielskewoo'
  document.cookie = `kumo=${token}; expires=${expires.toUTCString()}; path=/;`
  router.push('/')
}
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div class="w-md p-6 flex flex-col justify-center items-center border border-primary">
      <div class="flex items-center mb-8">
        <span class="icon-[tabler--cloud-download] size-12 me-3"></span>
        <h3 class="drawer-title text-3xl font-semibold">KUMO</h3>
      </div>
      <div class="mb-9">
        <div class="w-96 mb-2">
          <label class="label-text" for="account">Account</label>
          <input type="text" value="kumo@mail.com" id="account" class="input" />
        </div>
        <div class="w-96 mb-2">
          <label class="label-text" for="password">Password</label>
          <input type="password" class="input" value="123456" id="password" />
        </div>
      </div>
      <button type="button" class="btn btn-primary w-1/2 mx-auto" @click="login">Login</button>
    </div>
  </div>
</template>
