<template>
  <h2 className="logo">
    <span className="logo-partial">netflix</span>roulette
  </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'application-logo',
});
</script>

<style scoped>
.logo {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #f65261;
  width: min-content;
  padding: 15px 0;
  margin: 0 36px;
  z-index: 1;
  position: relative;
}

.logo-partial {
  font-weight: bold;
}
</style>
