import { mount } from '@vue/test-utils';
import List from "@/list";

test('List component', () => {
    const wrap = mount(List);
    const movies = wrap.vm.marvelMovies;
    wrap.setData({ marvelMovies: [...movies, 'Endgame']});

    expect(wrap).toMatchSnapshot()
})