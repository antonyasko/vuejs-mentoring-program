import SearchButton from '../components/SearchButton.vue';

export default {
  title: 'Components/SearchButton',
  component: SearchButton,
};

const Template = (args) => ({
  components: { SearchButton },

  setup() {
    return { args };
  },

  template: '<search-button />',
});

export const Default = Template.bind({});
Default.args = {
  onclick: () => console.log('Click vue 3'),
};
