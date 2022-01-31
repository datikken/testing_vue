import GithubCard from '@/github-card'
import {mount} from "@vue/test-utils";

const expectedUrl = `https://api.github.com/users/123`;

describe('methods', () => {
    test('composeUrl', () => {
        const { composeUrl } = GithubCard.methods;
        expect(composeUrl(123)).toBe(expectedUrl)
    });

    test('fetchData', async () => {
        const wrapper = mount(GithubCard)
        const jsonMock = jest.fn().mockResolvedValue(expectedUrl)
        window.fetch = jest.fn().mockResolvedValue({
            json: jsonMock
        })

        await wrapper.vm.fetchData()

        expect(jsonMock).toHaveBeenCalled()
        expect(wrapper.vm.data).toBe(expectedUrl)
    })
});