import React from 'react'

const FieldBodySelector = props => {
    if (props.fieldType === 'Input') return (<div></div>)
    else throw new Error('No wizard for the ' + props.fieldType)
}

export default FieldBodySelector