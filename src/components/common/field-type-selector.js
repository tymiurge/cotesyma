import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

const FieldTypeSelector = props => {
    const placeholder = props.placeholder || 'Select field type...'
    const onChange = props.onChange || (() => {})
    const label = props.label || 'Field Type'
    const value = props.value || ''
    // TODO think of keeping available types in General Configs page (UI) and in store
    const fieldTypes = [
        {text: 'String', value: 'string'},
        {text: 'Single Select', value: 'single-select'},
        {text: 'Text', value: 'text'},
        {text: 'Multyselect', value: 'multi-select'},
        {text: 'Workflow', value: 'Workflow'},
        {text: 'User Select', value: 'user-select'}
    ]
    return (
        <Segment>
            <Form>
                <Form.Select
                    
                    disabled={props.disabled}
                    options={fieldTypes}
                    placeholder={placeholder}
                    onChange={(event, data) => { onChange(data.value) }}
                    value={value}
                    label={label}
                />
            </Form>
        </Segment>
    )
}

export default FieldTypeSelector