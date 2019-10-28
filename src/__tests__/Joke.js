

import React from 'react'
import { shallow } from 'enzyme'

import FindJoke from '../components/pages/Joke'


it('should render correctly with no props', () => {
  const component = shallow(<FindJoke/>)
  expect(component).toMatchSnapshot()
})

it('should render banner text correctly with given strings', () => {
  const strings = ['one', 'two']
  const component = shallow(<FindJoke list={strings} />)
  expect(component).toMatchSnapshot()
})


it('should render button text on page', () => {
  const wrapper = shallow(<FindJoke />)
  const button = wrapper.find('button').text()

  expect(button).toEqual('prompt him for a joke')
})
