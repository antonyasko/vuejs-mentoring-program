<template>
  <ul class="cards">
    <card-component :card="card" v-for="card in movies" v-bind:key="card.id" />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import CardComponent from './CardComponent.vue';

export default defineComponent({
  name: 'cards-component',
  // props: ['cards'],
  // data() {
  //   return {
  //     movies: this.cards,
  //   };
  // },
  setup() {
    const store = useStore();

    return {
      movies: computed(() => store.getters.getCards),
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
