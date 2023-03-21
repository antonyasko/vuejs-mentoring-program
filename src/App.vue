<template>
  <header-component />
  <router-view />
  <footer-component />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
});
</script>

<style lang="scss">
@import "~@/global.scss";

* {
  margin: 0;
  font-family: "Montserrat";
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

.error-message {
  font-size: $font-size-xxl;
  font-weight: bold;
  line-height: $line-height-xxl;
  color: $white-color;
  margin: 128px auto;
}

.main-content {
  background-color: $dark-gray-color;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
