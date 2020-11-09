import React from 'react'
import ReactDOM from 'react-dom'
import { defineCustomElements } from '@ionic/pwa-elements/loader'

import App from './components/App'

export default function renderApp() {
    ReactDOM.render(<App />, document.getElementById('root'))
    if (typeof window !== 'undefined') {
        defineCustomElements(window)
    }
}

renderApp()
