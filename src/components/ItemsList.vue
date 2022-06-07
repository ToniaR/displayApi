<script lang="ts">
import axios from "axios"
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
//   'https://api.publicapis.org/entries'
  setup() {
    const data = ref({});

    onMounted(() => {
      console.log('component did mounted');
    })
    return { data };
  }


  
})
</script>

<template>
  <h1>Items</h1>
  
</template>

<style scoped lang="scss">
</style>
