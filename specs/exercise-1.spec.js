import UserList from '@/exercise-1';
import { mount } from '@vue/test-utils';
import { faker } from '@faker-js/faker';
import { nextTick } from 'vue';

function getRadomUsers(amount = 1) {
    let i = 1;
    const users = [];
    while (i <= amount) {
        users.push(faker.name.findName());
        i++;
    }
    return users;
}

test('component renders the users', async () => {
    const wrapper = mount(UserList, {
        propsData: {
            users: getRadomUsers(3)
        }
    });

    const li = wrapper.findAll('li');
    expect(li.length).toBe(3);

    const pickedName = li.at(1).text();

    wrapper.find('input').setValue(pickedName);
    await nextTick();

    const finalLi = wrapper.find('li');

    expect(finalLi.text()).toBe(pickedName);
})