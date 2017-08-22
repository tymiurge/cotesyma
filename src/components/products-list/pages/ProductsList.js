import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { ProductsTable } from './../sections/products-table'
import NewProductWizard from './../wizards/NewProduct'
import ProductsHeader from './../sections/products-header'
import { Toolbar } from './../../common'

const propTypes = {
  products: PropTypes.array,
  wizardDisplayed: PropTypes.bool,
  onNewProductRequest: PropTypes.func,
  onFiltering: PropTypes.func,
  filter: PropTypes.string
}

class ProductsList extends Component {

  componentDidMount () {
    this.props.productsRequest()
  }

  render () {
    const { props: p } = this
    return (

      <Container fluid>
        <ProductsHeader />
        <Container>
          <Toolbar
            onNewItemRequest={p.onNewProductRequest}
            onFilterChange={p.onFiltering}
            text={{
              filterPlaceholder: 'Filter products...',
              addPopup: 'Add new product'
            }}
          />
          {p.wizardDisplayed && <NewProductWizard />}
          <ProductsTable
            products={p.products.filter(product =>
              product.name.includes(p.filter)
            )}
            onConfigClick={(id) => p.history.push('/product-config/outward/' + id)}
          />
        </Container>
      </Container>
    )
  }
}

ProductsList.propTypes = propTypes

export default ProductsList
