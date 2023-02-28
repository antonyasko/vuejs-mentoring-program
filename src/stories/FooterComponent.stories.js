import FooterComponent from '../components/FooterComponent.vue';

export default {
  title: 'Components/FooterComponent',
  component: FooterComponent,
};

const Template = (args) => ({
  components: { FooterComponent },

  setup() {
    return { args };
  },

  template: '<footer-component />',
});

export const Default = Template.bind({});
Default.args = {};
