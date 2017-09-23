import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Packet, WizardHeader } from './../../common'
import FieldBodySelector from './field-body-selector.js'
import StringFieldConfig from './string-field-config'


class FieldWizardBuilder extends Component {

    constructor (props) {
        super(props)
        this.state = {
            expanded: false
        }
    }

    onFieldChangePipeline = update => {

    }

    toggleWizardExpand = () => {
        this.setState(Object.assign({}, this.state, {expanded: !this.state.expanded}))
    }

    fieldBodySelector = () => {
        /**
         onValueChange: PropTypes.func.isRequired,
    titleFieldName: PropTypes.string.isRequired,
    titleFieldTitleValue: PropTypes.string.isRequired,
    titleFieldPlaceholder: PropTypes.string.isRequired,
    descFieldName: PropTypes.string.isRequired,
    descFieldValue: PropTypes.string.isRequired,
    descFieldPlaceholder: PropTypes.string.isRequired
         */
        const { props } = this
        const fieldType = props.type
        if (fieldType === 'string' || fieldType === 'text') {
            return (<StringFieldConfig
                editable={!props.system}
                onValueChange={this.onFieldChangePipeline}
                titleFieldName={'title'}
                titleFielValue={props.title}
                titleFieldPlaceholder={'Field Title'}
                descFieldName={'desc'}
                descFieldValue={props.desc}
                descPlaceholder={'Field Descripton'}
            />)
        }
    }

    render () {
        const { props } = this
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
                        { this.fieldBodySelector() }
                    </Segment>
                }

            </Packet>
        )
    }
}

export default FieldWizardBuilder