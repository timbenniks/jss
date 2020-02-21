import { shallowMount } from '@vue/test-utils';
import StyleguideLayoutTabs from './Styleguide-Layout-Tabs.vue';
import StyleguideSpecimen from './Styleguide-Specimen.vue';
import { Text, RichText, Placeholder } from '@sitecore-jss/sitecore-jss-vue';

describe('Styleguide-Layout-Tabs.vue', () => {
  it('base component is rendered', () => {
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

    const wrapper = shallowMount(StyleguideLayoutTabs, {
      propsData: { fields, rendering },
      stubs: {
        ScText: Text,
        ScPlaceholder: Placeholder,
        scRichText: RichText,
        StyleguideSpecimen,
      },
      mocks: {
        $jss,
      }
    });

    expect(wrapper.html()).toContain('<div id="iPXmRJVrtzFAHsxjs7voD5R" class="pt-3" data-e2e-id="styleguide-layout-tabs">');
    expect(wrapper.html()).toContain('Implementation: <code>/src/components/UnitTestingMock/index.js</code>');

    wrapper.setData({ activeTabIndex: 1 })
  });
});
