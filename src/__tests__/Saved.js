

import React from 'react'
import { shallow } from 'enzyme'

import SavedJokes from '../components/pages/Saved'


it('should render correctly with no props', () => {
  const component = shallow(<SavedJokes/>)
  expect(component).toMatchSnapshot()
})

it('should render banner text correctly with given strings', () => {
  const strings = ['one', 'two']
  const component = shallow(<SavedJokes list={strings} />)
  expect(component).toMatchSnapshot()
})


it('should delete all jokes when not funny dad is clicked', () => {
  const wrapper = shallow(<SavedJokes />)
  const jokes = wrapper.find('p').text()
  const button = wrapper.find('button')
  button.simulate('click')

  expect(jokes).toEqual(' - ')
})
