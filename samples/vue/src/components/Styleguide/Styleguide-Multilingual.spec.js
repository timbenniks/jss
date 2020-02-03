import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import StyleguideMultilingual from './Styleguide-Multilingual.vue';
import StyleguideSpecimen from './Styleguide-Specimen.vue';
import { Text } from '@sitecore-jss/sitecore-jss-vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('Styleguide-Multilingual.vue', () => {
  it('renders props.fields when passed', () => {
    const fields = {
      sample: { value: 'MockSample' },
      heading: { value: 'MockHeader' },
      description: { value: 'MockDescription' },
    };

    const rendering = {
      uid: 'PXmRJVrtzFAHsxjs7voD5R',
      componentName: 'UnitTestingMock',
      placeholders: {},
    };

    const wrapper = shallowMount(StyleguideMultilingual, {
      localVue,
      router,
      propsData: { fields, rendering },
      stubs: {
        ScText: Text,
        StyleguideSpecimen,
      },
      mocks: {
        $t: (msg) => msg,
        $i18n: {
          i18next: {
            language: 'en',
          },
        },
      },
    });

    expect(wrapper.html()).toContain('<div id="iPXmRJVrtzFAHsxjs7voD5R" class="pt-3" data-e2e-id="styleguide-multilingual">');
    expect(wrapper.html()).toContain('Implementation: <code>/src/components/UnitTestingMock/index.js</code>');
  });
});
