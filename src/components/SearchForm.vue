<template>
  <div class="container search-form-container">
    <form class="search-form">
      <h2 class="search-form__heading">Find your movie</h2>
      <input
        class="search-form__input"
        id="search-form__field-id"
        :value="inputText"
        @input="(event: Event) => inputText = (event.target as HTMLInputElement).value"
      />
      <button class="search-form__button" type="button" @click="onButtonClick">Search</button>
    </form>
    <toggler-component title="search by" :actions="['title', 'genre']" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TogglerComponent from './TogglerComponent.vue';

export default defineComponent({
  name: 'search-form',
  components: { TogglerComponent },

  data() {
    return {
      inputText: '',
      onButtonClick() {
        console.log('What do you want to watch?', this.inputText);
      },
    };
  },
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";
.search-form-container {
  flex-direction: column;
  align-items: flex-start;
  width: min-content;
  margin: 0 auto;

  .search-form {
    position: relative;
    height: 144px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 15px;

    &__heading,
    &__button {
      text-align: center;
      text-transform: uppercase;
      color: $white-color;
    }

    &__input,
    &__button {
      font-size: $font-size-xs;
      font-style: normal;
      line-height: $line-height-xs;
      border-radius: $border-radius-standard;
    }

    &__heading {
      position: absolute;
      width: 392px;
      top: 0;
      font-weight: 300;
      font-size: $font-size-xxl;
      line-height: $line-height-xxl;
      letter-spacing: 1px;
    }

    &__input {
      background: rgba(50, 50, 50, 0.8);
      opacity: 0.7;
      width: 675px;
      padding: 17px 19px 16px;
      font-weight: 400;
      color: $white-color;
      mix-blend-mode: normal;
      margin-right: 14px;
      border: none;
    }

    &__button {
      background: $dark-indian-red-color;
      width: 233px;
      height: 57px;
      font-weight: 500;
    }
  }
}
</style>
