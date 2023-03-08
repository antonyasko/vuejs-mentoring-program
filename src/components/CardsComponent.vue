<template>
  <ul class="cards">
    <card-component :card="card" v-for="card in movies" v-bind:key="card.id" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';

export default defineComponent({
  name: 'cards-component',
  props: ['cards'],
  data() {
    return {
      movies: this.cards,
    };
  },

  components: { CardComponent },
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";

.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 57px;
  padding: 0;
}
</style>
