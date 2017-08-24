import React, { Component } from 'react'
import ProductCoverageHeader from './sections/header'
import { Container } from 'semantic-ui-react'
import { ItemsList } from './../common'

class ProductCoverage extends Component {
    render () {
        const testsList = [
            {
                id:0, title: 'Home sanity', feature: 'Home'
            }, {
                id: 1, title: 'Products list sanity', feature: 'Products List'
            }, {
                id: 2, title: 'Product config sanity', feature: 'Rroduct config'
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
                    <ItemsList headers={headers} data={testsList}/>
                </Container>
            </Container>
        )
    }
}

export default ProductCoverage
