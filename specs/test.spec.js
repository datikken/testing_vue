import TestComponent from '@/test';
import { mount, shallowMount } from '@vue/test-utils';
import List from "../src/list";

test('mount vue component', () => {
    const wrap = mount(TestComponent, {
      propsData: {
          value: 'vue-yes'
      }
    })

    expect(wrap.html()).toMatchSnapshot()
});

test(`List component shallow`, () => {
    console.log(mount(List).html())
    console.log(shallowMount(List).html())
});