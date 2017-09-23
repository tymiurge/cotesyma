import { connect } from 'react-redux'
import ProductFields from './product-fields-page'
import {
    $enterNewFieldCreation,
    $exitNewFieldCreation, 
    $fetchProductFields
} from './../../../actions'

const mapStateToProps = state => {
    return {
        newWizardDisplayed: state.productFields.newWizardDisplayed,
        testFields: state.productFields.list
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        onEnteringFieldCreation: () => { dispatch($enterNewFieldCreation()) },
        onExitingFieldCreation: () => { dispatch($exitNewFieldCreation()) },
        onFetchingFields: productId => { dispatch($fetchProductFields(productId)) }
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(ProductFields)