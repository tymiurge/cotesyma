import { connect } from 'react-redux'
import ProductCoverage from './pages/product-coverage'
import {
    $fetchProductTests
} from './../../actions/product-tests'

const mapStateToProps = state => {
    const { productTests } = state
    return {
        tests: productTests.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTestsRequest: productId => { dispatch($fetchProductTests(productId)) }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ProductCoverage)
