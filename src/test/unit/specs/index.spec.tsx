import { cleanup, render, RenderResult } from '@testing-library/react'
import React from 'react'
import Home from '../../../pages/index'

let wrapper: RenderResult
beforeEach(() => (wrapper = render(<Home />)))
afterEach(cleanup)

test('Get by text', () => {
  expect(wrapper.getByText('Hello Next.js!'))
})