import { mount } from '@vue/test-utils'
import Temprature from "@/temprature";

describe('computed', () => {
    test('celsius', () => {
        const wrapper = mount(Temprature)
        expect(wrapper.vm.celsius).toBe(0)
        wrapper.setData({ degrees: 23 });
        expect(wrapper.vm.celsius).toBe(23);
    });

    test("farenheit", () => {
        const { vm } = mount(Temprature);
        expect(vm.fahrenheit).toBe(32);
        vm.degrees = 16;
        expect(vm.fahrenheit).toBe(60.8)
    })
});


test('temp', async () => {
    const wrapper = mount(Temprature, {
        propsData: {
            temp: 40
        }
    })
    const { vm } = wrapper;

    expect(vm.degrees).toBe(40);
    expect(vm.type).toBe('celsius');

    await wrapper.setProps({
        temp: '50f'
    })

    expect(vm.degrees).toBe(50);
    expect(vm.type).toBe('fahrenheit')
})