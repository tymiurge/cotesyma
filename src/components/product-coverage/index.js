import { connect } from 'react-redux'
import ProductCoverage from './pages/product-coverage'
import {
    $fetchProductTests,
    $enterNewTestCreation,
    $exitNewTestCreation,
    $addTest
} from './../../actions/product-tests-actions'

const mapStateToProps = state => {
    const { productTests } = state
    return {
        tests: productTests.list,
        wizardDisplayed: productTests.newTestWizardDisplayed 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTestsFetchRequest: productId => { dispatch($fetchProductTests(productId)) },
        onEnterTestCreation: () => { dispatch($enterNewTestCreation()) },
        onExitTestCreation: () => { dispatch($exitNewTestCreation()) },
        onTestAdding: testData => { dispatch($addTest(testData)) }
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(ProductCoverage)
