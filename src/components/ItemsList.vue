<script lang="ts">
import axios from "axios"
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref({});

    const getData = () => {
      axios.get('https://api.publicapis.org/entries')
      .then((response) => {
          const { entries } = response.data;
          console.log({entries});
          data.value = entries;
      })
    }

    onMounted(() => {
      console.log('component did mounted');
      getData();
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
