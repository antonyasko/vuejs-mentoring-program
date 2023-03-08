<template>
  <router-view />
</template>

<style lang="scss">
@import "~@/global.scss";

* {
  margin: 0;
  font-family: 'Montserrat';
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

input,
button {
  cursor: pointer;
}
</style>
