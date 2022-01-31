import AlertMessage from '@/alert-message'
import { mount } from '@vue/test-utils'


describe('lifecycle methods', () => {
   test('mounted assigns interval', () => {
       const wrapper = mount(AlertMessage)
       expect(wrapper.vm.interval).not.toBe(undefined)
   });

   test('counter works', () => {
       jest.useFakeTimers()
       const wrapper = mount(AlertMessage);
       expect(wrapper.vm.counter).toBe(0);
       jest.advanceTimersByTime(1000);
       expect(wrapper.vm.counter).toBe(1);
   });

    test('instance gets destoyed', () => {
        const beforeDestroyedSpy = jest.spyOn(AlertMessage, 'beforeDestroy')
        const wrapper = mount(AlertMessage)
        wrapper.vm.counter = wrapper.vm.timer - 1;
        jest.advanceTimersByTime(1000);
        expect(beforeDestroyedSpy).toHaveBeenCalled()
    });
});