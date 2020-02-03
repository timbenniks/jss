import { shallowMount } from '@vue/test-utils';
import StyleguideSpecimen from './Styleguide-Specimen.vue';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-vue';

describe('Styleguide-Specimen.vue', () => {
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

    const wrapper = shallowMount(StyleguideSpecimen, {
      propsData: { fields, rendering },
      stubs: {
        ScText: Text,
        ScRichText: RichText,
      },
    });

    expect(wrapper.html()).toContain('<div id="iPXmRJVrtzFAHsxjs7voD5R" class="pt-3">');
    expect(wrapper.html()).toContain('<h4>MockHeader</h4>');
  });
});
