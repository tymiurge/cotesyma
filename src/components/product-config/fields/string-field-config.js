import React, {Component} from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const propTypes = {
    onValueChange: PropTypes.func.isRequired,
    titleFieldName: PropTypes.string.isRequired,
    titleFieldTitleValue: PropTypes.string.isRequired,
    titleFieldPlaceholder: PropTypes.string.isRequired,
    descFieldName: PropTypes.string.isRequired,
    descFieldValue: PropTypes.string.isRequired,
    descFieldPlaceholder: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired
}

class StringFieldConfig extends Component {
    render () {
        const { props } = this
        return (
            <Form>
                <Form.Field>
                    <label>Field Title</label>
                    <input
                        disabled={!props.editable}
                        placeholder={props.titleFieldPlaceholder}
                        value={props.titleFielValue}
                        onChange={(e) => props.onValueChange({[props.titleFieldName]: e.target.value})} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <TextArea
                        disabled={!props.editable}
                        placeholder={props.descFieldPlaceholder}
                        autoHeight
                        value={props.descFieldValue}
                        onChange={(e) => props.onValueChange({[props.descFieldName]: e.target.value})}
                    />
                </Form.Field>
            </Form>   
        )
    }
}

StringFieldConfig.propTypes = propTypes

export default StringFieldConfig