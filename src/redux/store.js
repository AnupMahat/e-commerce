import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import rootReducre from './root-reducre'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const middlewares = [logger]

export const store = createStore(
  rootReducre,
  composeEnhancers(applyMiddleware(...middlewares))
)
