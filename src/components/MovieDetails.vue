<template>
  <div class="movie-details">
    <img
      class="movie-details__poster"
      :alt="store.state.movieDetails.title"
      :src="store.state.movieDetails.posterurl"
    />
    <h2 class="movie-details__heading">
      <p class="movie-details__heading__title">{{ store.state.movieDetails.title }}</p>
      <p class="movie-details__heading__rating">{{ rating }}</p>
    </h2>
    <p class="movie-details__genres">{{ genres }}</p>
    <p class="movie-details__release-date">
      {{ new Date(store.state.movieDetails.releaseDate).getFullYear() }}
    </p>
    <p class="movie-details__duration">{{ duration }}</p>
    <p class="movie-details__storyline">{{ store.state.movieDetails.storyline }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store';

export default defineComponent({
  name: 'movie-details',

  data() {
    return { store };
  },

  computed: {
    genres() {
      return store.state.movieDetails.genre;
    },
    rating() {
      return store.state.movieDetails.rating.toFixed(1);
    },
    duration() {
      return `${store.state.movieDetails.duration.slice(2, -1)} min`;
    },
  },
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";

.movie-details {
  $inline-indent: 60px;
  $poster-height: 486px;
  $poster-width: 324px;
  $poster-margin-right: 53px;

  position: relative;
  padding: 15px $inline-indent 0;
  height: $poster-height;

  &__poster {
    position: absolute;
    width: $poster-width;
    height: $poster-height;
    left: $inline-indent;
  }

  &__heading,
  &__genres,
  &__storyline,
  &__duration,
  &__release-date {
    position: relative;
  }

  &__heading,
  &__duration,
  &__release-date,
  &__storyline {
    margin: 0;
  }

  &__genres,
  &__duration,
  &__release-date,
  &__storyline {
    font-style: normal;
  }

  &__heading,
  &__genres,
  &__storyline {
    left: calc(#{$poster-width} + #{$poster-margin-right});
    width: calc(100% - #{$poster-width} - #{$poster-margin-right});
  }

  &__duration,
  &__release-date,
  &__storyline {
    font-weight: 300;
  }

  &__genres,
  &__storyline {
    text-align: start;
    mix-blend-mode: normal;
    opacity: 0.5;
    color: $white-color;
  }

  &__heading {
    display: flex;

    &__title,
    &__rating {
      line-height: 60px;
      text-transform: uppercase;
      text-align: center;
      font-style: normal;
      font-weight: 300;
      margin: 0;
    }

    &__title {
      font-size: $font-size-xxl;
      letter-spacing: 1px;
      margin-right: 25px;
      max-width: calc(100% - 85px);
      white-space: nowrap;
      color: $white-color;
      overflow: hidden;
      text-overflow: ellipsis;
      width: min-content;
    }

    &__rating {
      font-size: $font-size-xs;
      border: 1px solid $white-color;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: $green-color;
    }
  }

  &__genres {
    font-weight: 500;
    font-size: $font-size-s;
    line-height: $line-height-xs;
    margin: 4px 0 30px;
  }

  &__duration,
  &__release-date {
    font-size: 24px;
    line-height: 29px;
    color: $dark-indian-red-color;
    position: relative;
  }

  &__release-date {
    margin-right: 51px;
    left: calc(#{$poster-width} + #{$poster-margin-right});
    width: min-content;
  }

  &__duration {
    top: -29px;
    right: 30px;
    width: max-content;
    left: calc(#{$poster-width} + #{$poster-margin-right} + 100px);
  }

  &__storyline {
    font-size: $font-size-xs;
    line-height: $line-height-xs;
    max-width: 100%;
    max-height: 315px;
    overflow: hidden;
  }
}
</style>
