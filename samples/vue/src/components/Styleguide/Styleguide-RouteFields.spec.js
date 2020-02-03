import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import StyleguideRouteFields from './Styleguide-RouteFields.vue';
import StyleguideSpecimen from './Styleguide-Specimen.vue';
import { Text } from '@sitecore-jss/sitecore-jss-vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('Styleguide-RouteFields.vue', () => {
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
      routeData: () => {
        return {
          fields: {
            pageTitle: {
              value: 'MockPageTitle',
            },
          },
        };
      },
    };

    const wrapper = shallowMount(StyleguideRouteFields, {
      localVue,
      router,
      propsData: { fields, rendering },
      stubs: {
        ScText: Text,
        StyleguideSpecimen,
      },
      mocks: {
        $jss,
      },
    });

    expect(wrapper.html()).toContain('<div id="iPXmRJVrtzFAHsxjs7voD5R" class="pt-3" data-e2e-id="styleguide-route-fields">');
    expect(wrapper.html()).toContain('<h4>MockHeader</h4>');
  });
});
