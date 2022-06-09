<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: ['item'],

  setup (props) {
    const corsAvailable = computed(() => {
      if(props.item.Cors) {
        return 'cors available';
      } else {
        return 'cors not available';
      }
    });

    const httpsAvailable = computed(() => {
      if(props.item.HTTPS) {
        return 'https available';
      } else {
        return 'https not available';
      }
    });

    return { corsAvailable, httpsAvailable };
  }
})

</script>

<template>
  <div class="item-wrapper">
    <section class="item-wrapper__block">
        <h3 class="item__title">{{ item.API }}</h3>
        <span class="item__token">{{ item.Auth }}</span>
        <p class="item__copy">{{ item.Description }}</p>
        <div class="item__features">
          <p>{{ corsAvailable }}</p>
          <p>{{ httpsAvailable }}</p>
        </div>
        <a :href="item.Link" target="_blank" class="item__link">Go to docs</a>
    </section>
    <section class="item-wrapper__block item-wrapper__block--right">
      <span class="item__category">{{ item.Category }}</span>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";

.item-wrapper {
  @include flexbox(row, space-between, flex-start);
  min-height: 12.5rem;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 1rem;
  background: white;
  box-shadow: 5px 8px 13px -20px rgb(0 0 0 / 20%);
  border-radius: 20px;
  padding: 1rem;
  box-sizing: border-box;

  &__block {
    @include flexbox(column, flex-start, flex-start);
  }
}

.item {
  &__token {
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: $tokenColor;
  }

  &__category {
    background: $categoryTagBg;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    color: $categoryTagColor;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  &__title {
    font-weight: 600;
    color: $itemTitleColor;
    margin: 0 0 0.5rem;
  }

  &__copy {
    margin: 0.5rem 0 0;
    color: $itemCopyColor;
    font-size: 1.2rem;
    font-weight: 300;
    text-align: left;
  }

  &__link {
    background: $linkBg;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    color: $linkTextColor;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }

  &__features {
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 0.77rem;
    text-align: left;
  }
}
</style>
