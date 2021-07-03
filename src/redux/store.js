import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'

import logger from 'redux-logger'
import rootReducre from './root-reducre'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(
  rootReducre,
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistor }
