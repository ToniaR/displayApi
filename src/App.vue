<template>
  <div id="app">
    <main class="wrapper">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  background-color: $bodyBgColor;
}

li {
  list-style: none;
}


#app {
  height: 100vh;
  margin: 0;
}

.wrapper {
  width: 100%;
  min-height: calc(100vh - 284px);
  max-width: 75rem;
  margin: 0 auto;
  padding: 2rem 5%;
  position: relative;

  @media screen and (max-width: 1023px) {
    width: 85%;
  }
}
</style>
