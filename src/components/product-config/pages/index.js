import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ProductConfigHeader from './../sections/product-config-header'
import { Route, Switch } from 'react-router-dom'
import ProductFeatures from './../sections/product-features'
import ProductFields from './../fields/product-fields-page'
import ProductWorkflow from './../sections/product-workflow'
import ProductConfigOutward from './product-outward/product-config-outward'

class ProductConfig extends Component {

  constructor (props) {
    super(props)
    this.state = {
      tab: this.props.match.params.tab,
      productId: this.props.match.params.id
    }
  }

  swithToTab = tabName => {
    const { history } = this.props
    history.push('/product-config/' + this.state.productId + '/' + tabName)
    this.setState(Object.assign({}, this.state, {tab: tabName}))
  }

  render () {
    return (
      <Container fluid>
        <ProductConfigHeader
          currentTab={this.state.tab}
          onTabSwitch={(tabName) => { this.swithToTab(tabName)} }
        />
        <Container>
          <Switch>
            <Route exact path="/product-config/:id/outward" component={ProductConfigOutward} />
            <Route exact path="/product-config/:id/fields" component={ProductFields} />
            <Route exact path="/product-config/:id/features" component={ProductFeatures} />
            <Route exact path="/product-config/:id/workflow" component={ProductWorkflow} />
          </Switch>
        </Container>
      </Container>
    )
  }
}

export default ProductConfig
