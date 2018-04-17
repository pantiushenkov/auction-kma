import React from 'react'
import { shallow } from 'enzyme'
import ErrorBoundary from '../ErrorBoundary'

jest.mock('../../Stackdriver/errorHandler', () => {
  return {
    report: jest.fn()
  }
})

describe('<ErrorBoundary />', () => {
  let wrapper,
    children
  beforeEach(() => {
    children = <div>Test</div>
    wrapper = shallow(
      <ErrorBoundary
        children={children}
      />
    )
  })
  it('should render this.props.children', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call setState in componentDidCatch', () => {
    wrapper.instance().setState = jest.fn()
    wrapper.instance().componentDidCatch({
      message: 'error'
    })
    expect(wrapper.instance().setState).toBeCalledWith({'errorMessage': 'error', 'hasError': true})
  })

  it('should render Sorry, error occured', () => {
    wrapper.instance().setState({
      hasError: true,
      errorMessage: true
    })
    expect(wrapper.update()).toMatchSnapshot()
  })
})
