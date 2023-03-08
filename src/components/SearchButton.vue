<template>
  <button class="search-form__button" type="button" @click="onClick">Search</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'search-button',

  emits: ['click'],

  setup(_props, { emit }) {
    return {
      onClick() {
        emit('click');
        console.log('Click');
      },
    };
  },
});
</script>

<style scoped lang="scss">
.search-form__button {
  text-align: center;
  text-transform: uppercase;
  color: $white-color;
  font-size: $font-size-xs;
  font-style: normal;
  line-height: $line-height-xs;
  border-radius: $border-radius-standard;
  background: $dark-indian-red-color;
  width: 233px;
  height: 57px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.logo-partial {
  font-weight: bold;
}
</style>
