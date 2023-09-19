<template>
  <NuxtLayout>
    <div>Count: {{ count }} | Double: {{ double }}</div>
    <div>API response: {{ data }}</div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import './assets/styles/main.scss'

const count = ref(1)
const double = computed(() => count.value * 2)
const { data, pending, error, refresh } = await useFetch('/api/users')
console.log('pending:', pending.value)
console.log('error:', error.value)
</script>
