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
  <div class="home-wrapper">
    <h1 class="home-wrapper__title">Welcome to the Public API's</h1>
    <h3 class="home-wrapper__subtitle">Here's a list of all available APIs</h3>

    <div>
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search API ..." class="search-wrapper__input" />
        <select name="" id="" v-model="selectedCategory" class="search-wrapper__select">
          <option disabled value="">Filter by category</option>
          <option v-for="(category, index) in categories" :key="index" :value="category">{{ category }}</option>
        </select>
      </div>
      <ItemsList :items="searchResult" />
    </div>

  </div>

</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.search-wrapper {
  @include flexbox(column, space-between, flex-start);

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  &__input {
    width: 70%;
    height: 50px;
    @include input();

    @media screen and (max-width: 927px) {
      width: 100%;
    }
  }

  &__select {
    width: 26%;
    height: 50px;
    @include input();

    @media screen and (max-width: 927px) {
      width: 100%;
    }
  }
}
</style>