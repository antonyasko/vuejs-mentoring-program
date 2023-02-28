<template>
  <span className="cards-counter">
    <span className="cards-counter__value">{{ moviesCount }}</span> movies found
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'results-count',
  props: {
    moviesCount: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.cards-counter {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  /* color: #ffffff; */
  margin: 24px 57px 28px;
}

.cards-counter {
  font-weight: bold;
}
</style>
