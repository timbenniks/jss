import { shallowMount } from '@vue/test-utils';
import StyleguideLayout from './Styleguide-Layout.vue';
import StyleguideSpecimen from './Styleguide-Specimen.vue';
import { Text, Placeholder } from '@sitecore-jss/sitecore-jss-vue';

describe('Styleguide-Layout.vue', () => {
  it('Sections render', () => {
    const fields = {
      heading: { value: 'MockHeader' },
      description: { value: 'MockDescription' },
    };

    const rendering = {
      uid: 'PXmRJVrtzFAHsxjs7voD5R',
      componentName: 'UnitTestingMock',
      placeholders: {
        'jss-styleguide-layout': [
          {
            uid: '{B7C779DA-2B75-586C-B40D-081FCB864256}',
            fields: {
              heading: {
                value: 'mockHeadingLevel1',
              },
            },
            placeholders: {
              'jss-styleguide-section': [
                {
                  uid: '{63B0C99E-DAC7-5670-9D66-C26A78000EAE}',
                  fields: {
                    heading: {
                      value: 'mockHeadingLevel2',
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    };

    const wrapper = shallowMount(StyleguideLayout, {
      propsData: { fields, rendering },
      stubs: {
        ScText: Text,
        ScPlaceholder: Placeholder,
        StyleguideSpecimen,
      },
    });

    expect(wrapper.html()).toContain('<a href="#iB7C779DA-2B75-586C-B40D-081FCB864256" class="nav-item font-weight-bold">mockHeadingLevel1</a>');
    expect(wrapper.html()).toContain('<a href="#i63B0C99E-DAC7-5670-9D66-C26A78000EAE">mockHeadingLevel2</a>');
  });
});
