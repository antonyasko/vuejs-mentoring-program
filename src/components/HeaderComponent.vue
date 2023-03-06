<template>
  <header class="header" :class="{ 'with-movie-details': !!store.movieDetails.id }">
    <application-logo />
    <search-form v-if="!store.movieDetails.id" />
    <button
      @click="onBackToSearchClick"
      v-if="!!store.movieDetails.id"
      class="header__back-to-search"
      type="button"
    >
      <img class="card__more-button__icon" src="../assets/search.svg" alt="search" />
    </button>
    <movie-details v-if="!!store.movieDetails.id" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ICardData } from '@/mockData';
import ApplicationLogo from './ApplicationLogo.vue';
import SearchForm from './SearchForm.vue';
import MovieDetails from './MovieDetails.vue';
import store from '../store';
import router from '../router';

export default defineComponent({
  name: 'header-component',

  components: { ApplicationLogo, MovieDetails, SearchForm },

  data() {
    return { store };
  },
  methods: {
    onBackToSearchClick() {
      store.setMovieDetails({} as ICardData);
      router.push({ path: '/' });
    },
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
