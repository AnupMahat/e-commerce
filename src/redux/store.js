import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducre from './root-reducre'

const middlewares = [logger]

export const store = createStore(rootReducre, applyMiddleware(...middlewares))
