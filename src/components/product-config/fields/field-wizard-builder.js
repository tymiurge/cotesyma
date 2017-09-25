import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Packet, WizardHeader } from './../../common'
import StringFieldConfig from './string-field-config'
import SelectFieldConfig from './select-field-config'


class FieldWizardBuilder extends Component {

    constructor (props) {
        super(props)
        this.state = {
            expanded: false
        }
    }

    onFieldChange = update => {

    }

    toggleWizardExpand = () => {
        this.setState(Object.assign({}, this.state, {expanded: !this.state.expanded}))
    }

    fieldConfigSelector = () => {
        const { props } = this
        const fieldType = props.type
        if (fieldType === 'string' || fieldType === 'text') {
            return (<StringFieldConfig
                editable={!props.system}
                onValueChange={this.onFieldChange}
                titleFieldName={'title'}
                titleFielValue={props.title}
                titleFieldPlaceholder={'Field Title'}
                descFieldName={'desc'}
                descFieldValue={props.desc}
                descPlaceholder={'Field Descripton'}
            />)
        } if (fieldType === 'single-select') {
            return (<SelectFieldConfig
                onValueChange={this.onFieldChange}
                {...this.props}
            />)
        }
    }

    render () {
        return (
            <Packet>
                <WizardHeader
                    top
                    expanded={this.state.expanded}
                    title={this.props.title}
                    onExpandIconClick={this.toggleWizardExpand}
                />
                {
                    this.state.expanded &&
                    <Segment attached>
                        { this.fieldConfigSelector() }
                    </Segment>
                }

            </Packet>
        )
    }
}

export default FieldWizardBuilder