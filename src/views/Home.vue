<script lang="ts">
import axios from "axios"
import { defineComponent, onMounted, ref, reactive, computed, watch } from 'vue'
import ItemsList from '@/components/ItemsList.vue'
import { Item, Entries } from '@/types'

export default defineComponent({
  components: {
    ItemsList
  },
  setup() {

    const search = ref<string>('')
    let items = ref<Item[]>([]);
    let categories = ref<string[]>([]);
    let selectedCategory = ref<string>('');

    const getData = () => {
      axios.get('https://api.publicapis.org/entries')
      .then((response) => {
          const { entries }: Entries  = response.data;
          items.value = entries;

          categories.value = [...new Set(entries.map(entry => entry.Category))];
      })
    }

    onMounted(() => {
      getData();
    })

    const searchResult = computed(() => {
      let filtered: Item[] = [];
      if (search) {
        filtered = items.value.filter((item: Item) => {
          return item.API.toLowerCase().includes(search.value.toLowerCase());
        });
      }
      if(selectedCategory.value.length > 0) {
        filtered = items.value.filter((item) => {
          return item.Category.toLowerCase().replace(/\s/g,'_') === selectedCategory.value.toLowerCase().replace(/\s/g,'_');
        })
      }
      return filtered;
    });


    return { items, search, searchResult, categories, selectedCategory };

  }  
})

</script>

<template>
  <h1>This is home</h1>
  <div>
    <input type="text" v-model="search" placeholder="Search API ..." />
    <select name="" id="" v-model="selectedCategory">
      <option v-for="(category, index) in categories" :key="index" :value="category">{{ category }}</option>
    </select>
  </div>
  <ItemsList :items="searchResult" />
</template>
