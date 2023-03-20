<template>
  <div class="details">
    <main-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainComponent from '@/components/MainComponent.vue';

export default defineComponent({
  name: 'DetailsView',
  components: {
    MainComponent,
  },
});
</script>
