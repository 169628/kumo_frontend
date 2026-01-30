<script setup>
const hobbies = ['Reading', 'Writing', 'Learning']
</script>

<template>
  <div>
    <ul>
      <li v-for="hobby in hobbies" :key="hobby">
        <slot :hobby="hobby">預設值</slot>
        <!-- 把原本的 hobby (array 中的其中一項，傳到父層去) -->
        <!-- slot 內的部分是預設值，當父層沒指定的時候就用預設值 -->
      </li>
    </ul>
  </div>
</template>
