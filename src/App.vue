<script setup lang="ts">
</script>

<template>
  <main class="wrapper">
    <router-view />
  </main>
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
}

li {
  list-style: none;
}


#app {
  height: 100vh;
  margin: 0;
}

.app-wrapper {
  width: 100%;
  min-height: calc(100vh - 284px);
  max-width: 75rem;
  margin: 0 auto;
  padding: 2rem 5%;
  position: relative;

  //TEMP
  border: 1px dashed green;

  @media screen and (max-width: 1023px) {
    width: 85%;
  }
}
</style>
