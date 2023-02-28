import ResultsCount from '../components/ResultsCount.vue';

export default {
  title: 'Components/ResultsCount',
  component: ResultsCount,
};

const Template = (args) => ({
  components: { ResultsCount },

  setup() {
    return { args };
  },

  template: '<results-count v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  moviesCount: 7,
};
