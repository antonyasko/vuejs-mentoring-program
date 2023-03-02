<template>
  <span className="cards-counter">
    <span className="cards-counter__value">{{ count }}</span> movies found
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'results-count',
  props: ['moviesCount'],
  data() {
    return {
      count: this.moviesCount,
    };
  },
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";

.cards-counter {
  font-style: normal;
  font-weight: normal;
  font-size: $font-size-xs;
  line-height: $line-height-xs;
  color: $white-color;
  margin: 24px 57px;

  &__value {
    font-weight: bold;
  }
}
</style>
