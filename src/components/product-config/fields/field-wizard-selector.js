import React from 'react'
import InputFieldBody from './input-field-body'
import SingleSelectFieldBody from './select-field-body'
     
const FieldBodySelector = props => {
    if (props.fieldType === 'Input') return <InputFieldBody {...props} />
    if (props.fieldType === 'Single Select') return <SingleSelectFieldBody {...props} />
    else {
        const type = props.fieldType || '(empty)'
        throw new Error('No wizard for the ' + type + ' field type')
    }
}

export default FieldBodySelector