import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

export default function StateDecorator({ initialState, children }) {
    const store = configureStore(initialState)
    return <Provider store={store}>{children}</Provider>
}

StateDecorator.propTypes = {
    initialState: PropTypes.shape({}),
    children: PropTypes.node,
}

StateDecorator.defaultProps = {
    initialState: {},
    children: undefined,
}
