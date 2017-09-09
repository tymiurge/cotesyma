import React, { Component } from 'react'
import ProductCoverageHeader from './../sections/header'
import { Container } from 'semantic-ui-react'
import { ItemsList } from './../../common'
import { Toolbar } from './../../common'
import NewTestWizard from './../sections/new-test-wizard'
import PropTypes from 'prop-types'

const propTypes = {
    tests: PropTypes.array.isRequired,
    onTestsRequest: PropTypes.func.isRequired   
}

class ProductCoverage extends Component {
    
    constructor (props) {
        super(props)
        this.productId = this.props.match.params.id * 1
    }

    toggleNewTestWizard = () => {
    }

    componentDidMount () {
        this.props.onTestsRequest(this.productId)
    }

    componentWillUpdate () {
        console.log('product coverage will update')
        console.log(this.props.tests)
    }

    render () {
        
        const headers = [
            {field: 'id', title: 'ID', type: 'id'},
            {field: 'title', title: 'Title', type: 'input'},
            {field: 'feature', title: 'Feature', type: 'combo'}
        ]
        return (
            <Container fluid>
                <ProductCoverageHeader />
                <Container>
                    <Toolbar onNewItemRequest={() => { this.toggleNewTestWizard()}}/>
                    <NewTestWizard />    
                    <ItemsList headers={headers} items={this.props.tests}/>
                </Container>
            </Container>
        )
    }
}

ProductCoverage.propTypes = propTypes

export default ProductCoverage
