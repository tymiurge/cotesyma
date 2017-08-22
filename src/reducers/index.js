import { testCyclesReducer } from './test-cycles'
import { productsReducer } from './products'

// TODO: refactor later main reducer so it would use the combineReducers utility
const reducer = (state = {}, action) => {
  return {
    products: productsReducer(state.products, action),
    testCycles: testCyclesReducer(state.testCycles, action)
  }
}

export default reducer
