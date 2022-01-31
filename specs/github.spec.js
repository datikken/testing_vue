import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {
    test('composeUrl', () => {
        const { composeUrl } = GithubCard.methods;
        const expectedUrl = `https://api.github.com/users/123`;
        expect(composeUrl(123)).toBe(expectedUrl)
    });

    test('fetchData', () => {
        const testData = 'GITHUB DATA';
        const jsonMock = jest.fn().mockResolvedValue(testData)
        window.fetch = jest.fn().mockResolvedValue({
            json: jsonMock
        });

        const wrapper = mount(GithubCard, {
            methods: {
                composeUrl: () => `url`
            }
        });

        expect(window.fetch).toHaveBeenCalledWith('url')
        expect(jsonMock).toHaveBeenCalled()
        expect(wrapper.vm.data).toBe(testData)
    })
});