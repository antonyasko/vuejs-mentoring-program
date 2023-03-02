<template>
  <footer className="footer">
    <application-logo />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ApplicationLogo from './ApplicationLogo.vue';

export default defineComponent({
  name: 'footer-component',

  components: { ApplicationLogo },
});
</script>

<style scoped lang="scss">
@import "~@/global.scss";

.footer {
  background-color: $gray-color;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
