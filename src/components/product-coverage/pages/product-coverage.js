import React, { Component } from 'react'
import ProductCoverageHeader from './../sections/header'
import { Container } from 'semantic-ui-react'
import { ItemsList } from './../../common'
import { Toolbar } from './../../common'
import NewTestWizard from './../sections/new-test-wizard'
import PropTypes from 'prop-types'

const propTypes = {
    tests: PropTypes.array.isRequired,
    wizardDisplayed: PropTypes.bool.isRequired,
    onTestsFetchRequest: PropTypes.func.isRequired, 
    onTestAdding: PropTypes.func,
    onEnterTestCreation: PropTypes.func,
    onExitTestCreation: PropTypes.func,
}

const defaultProps = {
}

class ProductCoverage extends Component {
    
    constructor (props) {
        super(props)
        this.productId = this.props.match.params.id * 1
    }

    openNewTestWizard = () => {
        this.props.onEnterTestCreation()
    }

    closeNewTestWizard = () => {
        this.props.onExitTestCreation()
    }

    componentDidMount () {
        this.props.onTestsFetchRequest(this.productId)
    }

    addTest = testData => {
        this.props.onTestAdding(testData)
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
                    <Toolbar
                        onNewItemRequest={() => { this.openNewTestWizard()}}
                    />
                    {
                    this.props.wizardDisplayed && 
                    <NewTestWizard 
                        onCancelClick={ () => { this.closeNewTestWizard()} }
                        onSaveClick={ testData => { this.addTest(testData)} }
                    />
                    }
                    <ItemsList headers={headers} items={this.props.tests}/>
                </Container>
            </Container>
        )
    }
}

ProductCoverage.propTypes = propTypes
ProductCoverage.defaultProps = defaultProps

export default ProductCoverage
