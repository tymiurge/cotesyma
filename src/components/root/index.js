import React from 'react'
import { Provider } from 'react-redux'
import ProductsList from './../products-list'
import TestCyclesPage from './../test-cycles'
import ProductConfig from './../product-config'
import ProductCoverage from './../product-coverage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './../home'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test-cycles/" component={TestCyclesPage} />
        <Route path="/products/" component={ProductsList} />
        <Route path="/product-config/:id/:tab" component={ProductConfig} />
        <Route path="/product-coverage/:id" component={ProductCoverage} />
      </Switch>

    </BrowserRouter>

  </Provider>
)

export default Root
