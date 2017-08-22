import * as api from './../../api'

export const $fetchProductById = (id) => (dispatch) => {
  api.fetchProductWithConfig(id).then(product => {
    dispatch({
      type: 'PRODUCT_WITH_CONFIG_FETCHED',
      product
    })
  })
}

export const $setProductsFilter = (filter) => (dispatch) => {
  dispatch({
    type: 'PRODUCTS_FILTER_CHANGE',
    filter
  })
}

export const $addProduct = (product) => (dispatch) => {
  dispatch({type: 'PRODUCT_CREATION_COMPLETED'})
  return api.saveProduct(product).then(response => {
    dispatch({
      type: 'PRODUCT_ADD',
      product: response
    })
  })
}

export const $fetchProducts = () => (dispatch) =>
  api.fetchProducts().then(products => {
    dispatch({
      type: 'PRODUCTS_FETCHED',
      products
    })
  })

export const $newProductRequest = () => (dispatch) => {
  dispatch({
    type: 'PRODUCT_CREATION_REQUEST'
  })
}
