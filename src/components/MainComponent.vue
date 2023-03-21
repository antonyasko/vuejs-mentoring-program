<template>
  <main class="main-content">
    <div class="cards-navigation">
      <results-count v-bind:movies-count="cards.length" />
      <toggler-component
        title="sort by"
        name="sortBy"
        mutation="setSortBy"
        v-bind:actions="sortFilters"
      />
    </div>
    <cards-component v-if="cards.length" />
    <h2 v-if="cards.length === 0" class="error-message">No films found</h2>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import ResultsCount from './ResultsCount.vue';
import CardsComponent from './CardsComponent.vue';
import TogglerComponent from './TogglerComponent.vue';

export default defineComponent({
  name: 'main-component',

  data() {
    return {
      sortFilters: [
        { label: 'release date', name: 'releaseDate' },
        { label: 'rating', name: 'rating' },
      ],
    };
  },

  setup() {
    const { dispatch, getters } = useStore();

    return {
      dispatch,
      cards: computed(() => getters.getCards),
    };
  },

  created() {
    this.dispatch('fetchAllMovies');
  },

  components: { CardsComponent, ResultsCount, TogglerComponent },
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";

.main-content {
  .cards-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    top: -72px;
  }
}
</style>
