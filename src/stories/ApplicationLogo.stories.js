import ApplicationLogo from '../components/ApplicationLogo.vue';

export default {
  title: 'Components/ApplicationLogo',
  component: ApplicationLogo,
};

const Template = (args) => ({
  components: { ApplicationLogo },

  setup() {
    return { args };
  },

  template: '<application-logo />',
});

export const Default = Template.bind({});
Default.args = {};
