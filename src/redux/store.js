import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'

import logger from 'redux-logger'
import rootReducre from './root-reducre'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(
  rootReducre,
  composeEnhancers(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)

export default { store, persistor }
