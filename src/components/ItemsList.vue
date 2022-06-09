<script lang="ts">
import { defineComponent } from 'vue'
import Item from '@/components/Item.vue'

export default defineComponent({
  components: {
    Item
  },
  props: ['items']
})

</script>

<template>
  <Item
    v-for="(item, index) in items" :key="index"
    :item="item"
  />
</template>
