import { shallowMount } from '@vue/test-utils';
import StyleguideSection from './Styleguide-Section.vue';
import StyleguideSpecimen from './Styleguide-Specimen.vue';
import { Text, Placeholder } from '@sitecore-jss/sitecore-jss-vue';

describe('Styleguide-Sitection.vue', () => {
  it('renders props.fields when passed', () => {
    const fields = {
      heading: { value: 'MockHeader' },
      description: { value: 'MockDescription' },
    };

    const rendering = {
      uid: 'PXmRJVrtzFAHsxjs7voD5R',
      componentName: 'UnitTestingMock',
      placeholders: {
        // 'jss-styleguide-section': [
        //   {
        //     uid: '{63B0C99E-DAC7-5670-9D66-C26A78000EAE}',
        //     componentName: 'ContentBlock',
        //     dataSource: 'available-in-connected-mode',
        //     params: {},
        //     fields: {},
        //   },
        // ],
      },
    };

    const wrapper = shallowMount(StyleguideSection, {
      propsData: { fields, rendering },
      stubs: {
        ScText: Text,
        ScPlaceholder: Placeholder,
        StyleguideSpecimen,
      },
    });

    expect(wrapper.html()).toContain('<div id="iPXmRJVrtzFAHsxjs7voD5R" class="pt-3">');
    expect(wrapper.html()).toContain('<h3 class="border-bottom">MockHeader</h3>');
  });
});
