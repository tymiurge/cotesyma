import React, { Component } from 'react'
import ProductCoverageHeader from './sections/header'
import { Container } from 'semantic-ui-react'
import { ItemsList } from './../common'

// testing
class ProductCoverage extends Component {
    render () {
        const testsList = [
            {
                id:0, title: 'Home sanity'
            }, {
                id: 1, title: 'Products list sanity'
            }, {
                id: 2, title: 'Product config sanity'
            }
        ]
        const headers = [
            {field: 'id', titile: 'ID', type: 'id'},
            {field: 'title', title: 'Title', type: 'input'},
            {field: 'feature', title: 'Feature', type: 'combo'}
        ]
        return (
            <Container fluid>
                <ProductCoverageHeader />
                <Container>
                    <ItemsList headers={headers}/>
                </Container>
            </Container>
        )
    }
}

export default ProductCoverage
