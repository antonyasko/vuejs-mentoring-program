<template>
  <header class="header" :class="{ 'with-movie-details': !!movieDetailsId }">
    <application-logo />
    <search-form v-if="!movieDetailsId" />
    <button
      @click="onBackToSearchClick"
      v-if="!!movieDetailsId"
      class="header__back-to-search"
      type="button"
    >
      <img class="card__more-button__icon" src="../assets/search.svg" alt="search" />
    </button>
    <movie-details v-if="!!movieDetailsId" />
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ICardData } from '@/mockData';
import ApplicationLogo from './ApplicationLogo.vue';
import SearchForm from './SearchForm.vue';
import MovieDetails from './MovieDetails.vue';

export default defineComponent({
  name: 'header-component',

  components: { ApplicationLogo, MovieDetails, SearchForm },

  setup() {
    const store = useStore();
    const router = useRouter();

    return {
      onBackToSearchClick() {
        store.commit('setMovieDetails', {} as ICardData);
        router.push({ path: '/' });
      },
      movieDetailsId: computed(() => store.state.movieDetails.id),
    };
  },
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";

.header {
  position: relative;
  height: 375px;
  margin-bottom: 72px;
  background-image: url("../assets/header.jpg");

  &.with-movie-details {
    height: 606px;
  }

  &__back-to-search {
    position: absolute;
    top: 24px;
    right: 48px;
    height: 24px;
    width: 24px;
  }
}
</style>
