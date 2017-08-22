import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducers'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'

// TODO use thunk from redux-thunk
const _thunk = (store) => (next) => (action) =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)

export const store = () => {
  const middlewares = [_thunk]
  if (process.env.NODE_ENV !== 'production') middlewares.push(logger)
  return createStore(
    reducer,
    compose(applyMiddleware(...middlewares))
  )
}
