<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['items']
})

</script>

<template>
  <h1>Items</h1>

  <ul>
    <li v-for="(item, index) in items" :key="index">
      <p><strong>title: </strong>{{ item.API }}</p>
      <p><strong>token: </strong>{{ item.Auth }}</p>
      <p><strong>category: </strong>{{ item.Category }}</p>
      <p><strong>is cors available: </strong>{{ item.Cors }}</p>
      <p><strong>description: </strong>{{ item.Description }}</p>
      <p><strong>https available: </strong>{{ item.HTTPS }}</p>
      <p><a :href="item.Link" target="blank">Go the the documentation</a></p>
      <hr/>
    </li>
  </ul>


  
</template>

<style scoped lang="scss">
</style>
