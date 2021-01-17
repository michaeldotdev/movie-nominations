import React from 'react';
import { shallow } from 'enzyme';

import Movie from './Movie'

describe('Movie Component', () => {
  test("Movie component is defined", () => {
    const wrapper = shallow(<Movie />);

    expect(wrapper.exists()).toBe(true);
  })
})

it('should have a container div with className movieDetails', () => {
  const wrapper = shallow(<Movie />);

  expect(
    wrapper.containsMatchingElement(
      <div className="movieDetails"></div>
    )
  ).toBe(true)
})


it('should have a "button" element', () => {
  const wrapper = shallow(<Movie />);

  expect(
    wrapper.containsMatchingElement(
      <button>Nominate</button>
    )
  ).toBe(true)
})

