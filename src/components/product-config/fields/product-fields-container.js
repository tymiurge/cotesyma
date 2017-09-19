import { connect } from 'react-redux'
import ProductFields from './product-fields-page'
import {
    $enterNewFieldCreation,
    $exitNewFieldCreation
} from './../../../actions'

const mapStateToProps = state => {
    return {
        newWizardDisplayed: state.productFields.newWizardDisplayed
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        onEnteringFieldCreation: () => { dispatch($enterNewFieldCreation()) },
        onExitingFieldCreation: () => { dispatch($exitNewFieldCreation()) },
    }
}


export default connect(
    mapStateToProps, mapDispatchToProps
)(ProductFields)