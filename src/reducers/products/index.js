const list = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_FETCHED':
      return action.products
    case 'PRODUCT_ADD':
      return [...state, action.product]
    default:
      return state
  }
}

const creatingNewProduct = (state = false, action) => {
  switch (action.type) {
    case 'PRODUCT_CREATION_REQUEST':
      return true
    case 'PRODUCT_CREATION_COMPLETED':
      return false
    default:
      return state
  }
}

const filter = (state = '', action) => {
  switch (action.type) {
    case 'PRODUCTS_FILTER_CHANGE':
      return action.filter
    case 'PRODUCTS_FILTER_RESET':
      return ''
    default:
      return state
  }
}

const inConfig = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCT_WITH_CONFIG_FETCHED':
      return {}
    default:
      return state
  }
}

export const productsReducer = (state = {}, action) => {
  return {
    list: list(state.list, action),
    creatingNewProduct: creatingNewProduct(state.creatingNewProduct, action),
    filter: filter(state.filter, action),
    inConfig: inConfig(state.inConfig, action)
  }
}
