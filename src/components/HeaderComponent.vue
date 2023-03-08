<template>
  <header class="header">
    <application-logo />
    <search-form />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ApplicationLogo from './ApplicationLogo.vue';
import SearchForm from './SearchForm.vue';

export default defineComponent({
  name: 'header-component',

  components: { ApplicationLogo, SearchForm },
});
</script>

<style scoped>
.header {
  position: relative;
  height: 375px;
  margin-bottom: 72px;
  background-image: url('../assets/header.jpg');;
}
</style>
