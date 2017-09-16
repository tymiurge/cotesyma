import React, {Component} from 'react'
import WizardHeader from './field-wizard-header'

class InputFieldConfig extends Component {
    render () {
        return (
            <WizardHeader title="Input field" top expanded={true} onExpandIconClick = {() => { alert('OK')}}/>
        )
    }
}

export default InputFieldConfig