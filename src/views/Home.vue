<script setup lang="ts">
import { ref } from 'vue'
import ItemsList from '@/components/ItemsList.vue'


const count = ref(0)
</script>

<template>
  <h1>This is home</h1>
  <ItemsList />
</template>
