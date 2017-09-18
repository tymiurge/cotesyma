import React from 'react'
import InputFieldBody from './input-field-body'
import SingleSelectFieldBody from './select-field-body'
     
const FieldBodySelector = props => {
    if (props.fieldType === 'Input') return <InputFieldBody {...props} />
    if (props.fieldType === 'Single Select') return <SingleSelectFieldBody {...props} />
    else throw new Error('No wizard for the ' + props.fieldType)
}

export default FieldBodySelector