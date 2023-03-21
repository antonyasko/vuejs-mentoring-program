<template>
  <main class="main-content">
    <div class="cards-navigation">
      <results-count v-if="cards.length" :movies-count="cards.length" />
      <toggler-component title="sort by" v-bind:actions="sortFilters" />
    </div>
    <cards-component v-if="cards.length" :cards="cards" />
    <h2 v-if="cards.length === 0" class="no-results-message">No films found</h2>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResultsCount from './ResultsCount.vue';
import CardsComponent from './CardsComponent.vue';
import TogglerComponent from './TogglerComponent.vue';
import store from '../store';

export default defineComponent({
  name: 'main-component',

  data() {
    return {
      // cards: store.state.cards,
      sortFilters: ['release date', 'rating'],
    };
  },
  computed: {
    cards() {
      return store.state.cards;
    },
  },

  components: { CardsComponent, ResultsCount, TogglerComponent },
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";

.main-content {
  background-color: $dark-gray-color;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .cards-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    top: -72px;
  }

  .no-results-message {
    font-size: $font-size-xxl;
    font-weight: bold;
    line-height: $line-height-xxl;
    color: $white-color;
    margin: 128px auto;
  }
}
</style>
