import { shallowMount } from '@vue/test-utils';
import StyleguideSitecoreContext from './Styleguide-SitecoreContext.vue';
import StyleguideSpecimen from './Styleguide-Specimen.vue';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-vue';

describe('Styleguide-SitecoreContext.vue', () => {
  it('renders props.fields when passed', () => {
    const fields = {
      heading: { value: 'MockHeader' },
      description: { value: 'MockDescription' },
    };

    const rendering = {
      uid: 'PXmRJVrtzFAHsxjs7voD5R',
      componentName: 'UnitTestingMock',
      placeholders: {},
    };

    const $jss = {
      sitecoreContext: () => {
        return {
          pageEditing: false,
          site: {
            name: 'JssDisconnectedLayoutService',
          },
          pageState: 'normal',
          language: 'en',
          routeName: 'styleguide',
          itemId: 'available-in-connected-mode',
        };
      },
    };

    const wrapper = shallowMount(StyleguideSitecoreContext, {
      propsData: { fields, rendering },
      stubs: {
        ScText: Text,
        ScRichText: RichText,
        StyleguideSpecimen,
      },
      mocks: {
        $jss,
      },
    });

    expect(wrapper.html()).toContain('<div id="iPXmRJVrtzFAHsxjs7voD5R" class="pt-3" data-e2e-id="styleguide-sitecore-context">');
    expect(wrapper.html()).toContain('<h4>MockHeader</h4>');
  });
});
