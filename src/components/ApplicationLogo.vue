<template>
  <h2 class="logo"><span class="logo-partial">netflix</span>roulette</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'application-logo',
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";

.logo {
  font-style: normal;
  font-weight: normal;
  font-size: $font-size-xs;
  line-height: $line-height-xs;
  color: $dark-indian-red-color;
  width: min-content;
  padding: 15px 0;
  margin: 0 36px;
  z-index: 1;
  position: relative;

  &-partial {
    font-weight: bold;
  }
}
</style>
