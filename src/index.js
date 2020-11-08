import React from 'react'
import ReactDOM from 'react-dom'
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import ReduxStateDecorator from './redux/StateDecorator'

import App from './components/App'

export default function renderApp() {
    let preloadedState
    if (typeof window !== 'undefined' && window.__PRELOADED_STATE__) {
        preloadedState = window.__PRELOADED_STATE__
        const stateData = document.getElementById('stateData')
        document.head.removeChild(stateData)
        delete window.__PRELOADED_STATE__
    }
    ReactDOM.render(
        <ReduxStateDecorator initialState={preloadedState}>
            <App />
        </ReduxStateDecorator>,
        document.getElementById('root')
    )
    if (typeof window !== 'undefined') {
        defineCustomElements(window)
    }
}

renderApp()
