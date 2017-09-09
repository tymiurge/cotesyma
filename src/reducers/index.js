import { testCyclesReducer } from './test-cycles'
import { productsReducer } from './products'
import { productTestsReducer } from './product-tests'

// TODO: refactor later main reducer so it would use the combineReducers utility
const reducer = (state = {}, action) => {
  return {
    products: productsReducer(state.products, action),
    testCycles: testCyclesReducer(state.testCycles, action),
    productTests: productTestsReducer(state.productTests, action)
  }
}

export default reducer
