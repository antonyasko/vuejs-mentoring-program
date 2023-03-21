<template>
  <div class="toggler">
    <p class="toggler__title">{{ title }}</p>
    <button
      :name="action.name"
      v-for="action in actions"
      v-bind:key="action.name"
      @click="onClick"
      class="toggler__control"
      :class="{ active: action.name === activeButton }"
    >
      {{ action.label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store';

export default defineComponent({
  props: ['actions', 'name', 'mutation', 'title'],

  name: 'toggler-component',

  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      activeButton: store.state[this.name],
    };
  },

  methods: {
    onClick(e: Event) {
      this.activeButton = (e.target as HTMLButtonElement).name;
      store.commit(this.mutation, this.activeButton);
    },
  },
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";

.toggler {
  display: flex;
  width: max-content;
  margin-right: 57px;

  &__title {
    line-height: $line-height-xs;
  }

  &__title,
  &__control {
    padding: 5px 20px;
    font-style: normal;
    font-weight: 500;
    font-size: $font-size-m;
    text-transform: uppercase;
    color: $white-color;
  }

  &__control {
    line-height: $line-height-m;
    background-color: rgba(50, 50, 50, 0.8);

    &:nth-child(2) {
      border-top-left-radius: $border-radius-standard;
      border-bottom-left-radius: $border-radius-standard;
    }

    &:last-child {
      border-top-right-radius: $border-radius-standard;
      border-bottom-right-radius: $border-radius-standard;
    }

    &.active {
      background-color: $dark-indian-red-color;
    }
  }
}
</style>
