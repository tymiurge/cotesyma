import React from 'react'
import InputFieldBody from './input-field-body'
import SingleSelectFieldBody from './select-field-body'

// TODO: DEPRECATED - use class method instead
const FieldBodySelector = props => {
    if (props.fieldType === 'string') return <InputFieldBody {...props} />
    if (props.fieldType === 'single-select') return <SingleSelectFieldBody {...props} />
    if (props.fieldType === 'text') return (<div>TEXT</div>)
    else {
        const type = props.fieldType || '(empty)'
        throw new Error('No wizard for the ' + type + ' field type')
    }
}

export default FieldBodySelector