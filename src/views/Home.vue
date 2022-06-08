<script lang="ts">
import axios from "axios"
import { defineComponent, onMounted, ref, reactive, computed } from 'vue'
import ItemsList from '@/components/ItemsList.vue'

interface Item {
  API: string,
  Auth: string,
  Category: string,
  Cors: string,
  Description: string,
  HTTPS: boolean
  Link: string
}

type Entries = {
  entries: Item[];
};

export default defineComponent({
  components: {
    ItemsList
  },
  setup() {

    const search = ref('')
    let items = ref<Item[]>([]);

    const getData = () => {
      axios.get('https://api.publicapis.org/entries')
      .then((response) => {
          const { entries }: Entries  = response.data;
          items.value = entries;
      })
    }

    onMounted(() => {
      getData();
    })

    const searchResult = computed(() => {
      if (search) {
        return items.value.filter((item: Item) => item.API.toLowerCase().includes(search.value.toLowerCase()));
      }
    });

    return { items, search, searchResult };

  }  
})

</script>

<template>
  <h1>This is home</h1>
  <div>
    <input type="text" v-model="search" placeholder="Search API ..." />
  </div>
  <ItemsList :items="searchResult" />
</template>
