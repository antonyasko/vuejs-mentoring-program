<template>
  <li class="card" @click="onCardClick" @keydown="onCardClick">
    <v-lazy-image class="card__poster" :src="movie.posterurl" :alt="movie.title" />
    <div class="card__description">
      <p class="card__description__title">{{ movie.title }}</p>
      <p class="card__description__genres">{{ movie.genres.join(", ") }}</p>
      <p class="card__description__release-date">
        {{ new Date(movie.releaseDate).getFullYear() }}
      </p>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VLazyImage from 'v-lazy-image';
import store from '../store';
import router from '../router';

export default defineComponent({
  name: 'card-component',
  props: ['card'],

  components: { VLazyImage },

  data() {
    return { movie: this.card, store };
  },
  methods: {
    onCardClick() {
      store.commit('setMovieDetails', this.card);
      router.push({ path: '/details' });
    },
  },
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";

.card {
  position: relative;
  list-style-type: none;
  width: 323px;
  height: 500px;
  margin-bottom: 40px;
  margin-right: 24px;
  cursor: pointer;

  &__poster {
    width: 100%;
    height: 430px;
  }

  &__description {
    position: absolute;
    top: 430px;

    &__title,
    &__genres,
    &__release-date {
      margin: 0;
      color: $white-color;
      font-style: normal;
      font-weight: 500;
      mix-blend-mode: normal;
    }

    &__title,
    &__release-date {
      opacity: 0.7;
    }

    &__title,
    &__genres {
      text-align: start;
    }

    &__release-date,
    &__genres {
      font-size: $font-size-s;
    }

    &__title {
      width: 232px;
      font-size: $font-size-l;
      line-height: $line-height-l;
      margin-top: 16px;
    }

    &__genres {
      width: 323px;
      opacity: 0.5;
      margin-top: 8px;
      line-height: $line-height-s;
    }

    &__release-date {
      text-align: center;
      border: 1px solid $light-gray-color;
      border-radius: $border-radius-standard;
      width: 66px;
      position: absolute;
      right: 0;
      bottom: 23px;
      line-height: $line-height-xs;
    }
  }
}
</style>
