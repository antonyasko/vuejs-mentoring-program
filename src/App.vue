<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="scss">
@import "~@/global.scss";
* {
  margin: 0;
}

body {
  background-color: $gray-color;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  background: none;
  border: none;
  padding: 0;
}

input, button, select, option {
  cursor: pointer;
}
</style>
