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

<style scoped>
.search-form__button {
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 20px;
  font-style: normal;
  line-height: 24px;
  border-radius: 4px;
  background: #f65261;
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
