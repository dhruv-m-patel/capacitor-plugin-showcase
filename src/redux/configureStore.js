import { createStore, applyMiddleware, compose } from 'redux'
import { createMiddleware } from 'redux-api-middleware'
import rootReducer from './reducers'

export default function configureStore(preloadedState) {
    let composeEnhancers = compose
    if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }

    return createStore(
        rootReducer,
        preloadedState || rootReducer.initialState,
        composeEnhancers(applyMiddleware(createMiddleware))
    )
}
