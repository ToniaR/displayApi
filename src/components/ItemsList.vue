<script lang="ts">
import axios from "axios"
import { defineComponent, onMounted, ref, reactive } from 'vue'

interface Item {
  API: string,
  Auth: string,
  Category: string,
  Cors: string,
  Description: string,
  HTTPS: boolean
  Link: string
}

type Example = {
  entries: Item[];
};

export default defineComponent({
  setup() {
    let items = ref<Item[]>([]);

    const getData = () => {
      axios.get('https://api.publicapis.org/entries')
      .then((response) => {
          const { entries }: Example  = response.data;
          items.value = entries;
      })
    }

    onMounted(() => {
      console.log('component did mounted');
      getData();
    })
    return { items };

  }  
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
