import TestComponent from '@/test';
import { mount } from '@vue/test-utils';

test('first-spec', () => {
    const wrap = mount(TestComponent)
    console.log(wrap)
})