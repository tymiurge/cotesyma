import { connect } from 'react-redux'
import {
  $newProductRequest,
  $fetchProducts,
  $setProductsFilter
} from './../../actions/product-list-actions'
import ProductsList from './pages/ProductsList'

const mapStateToProps = (state) => {
  const { products } = state
  return {
    products: products.list,
    wizardDisplayed: products.creatingNewProduct,
    filter: products.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewProductRequest: () => { dispatch($newProductRequest()) },
    productsRequest: () => { dispatch($fetchProducts()) },
    onFiltering: filter => { dispatch($setProductsFilter(filter)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)
