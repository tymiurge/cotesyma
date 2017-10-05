import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'
import { 
    Packet, 
    SaveCancelBottomPanel, 
    CancelBottomPanel, 
    WizardHeader
} from './../../common'
import StringFieldConfig from './string-field-config'
import SelectFieldConfig from './select-field-config'
import PropTypes from 'prop-types'

const propTypes = {
    onSaveClick: PropTypes.func.isRequired,
    formValues: PropTypes.object.isRequired
}

class FieldWizard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            formValues: this.props.formValues,
            onlyCancel: true,
            expanded: false
        }
    }

    toggleExpandState = () => this.setState(Object.assign(
        {},
        this.state,
        {expanded: !this.state.expanded}
    ))
    
    onFieldChange = update => {
        const formValues = Object.assign({}, this.state.formValues, update)
        const newState = Object.assign({}, this.state, {formValues, onlyCancel: false})
        this.setState(newState)
    }

    configTypeSelector = () => {
        const fieldType = this.state.formValues.type
        if (fieldType === 'string' || fieldType === 'text') {
            return (<StringFieldConfig
                onValueChange={this.onFieldChange}
                {...this.state.formValues}
            />)
        } if (fieldType === 'single-select') {
            return (<SelectFieldConfig
                onValueChange={this.onFieldChange}
                {...this.state.formValues}
            />)
        }
    }

    render () {
        const { formValues, expanded } = this.state
        return (
            <Packet>
                <WizardHeader
                    top
                    expanded={expanded}
                    title={formValues.title || ''}
                    onExpandIconClick={this.toggleExpandState}
                />
                {
                    expanded &&
                    <Segment attached>
                        {
                            this.configTypeSelector()
                        }                    
                    </Segment>
                }
                {
                    expanded && this.state.onlyCancel &&
                    <CancelBottomPanel
                        cancelColor='grey'
                        onCancelClick={() => {this.setState(Object.assign({}, this.setState, {expanded: false}))}}
                    />
                }
                {
                    expanded && !this.state.onlyCancel &&
                    <SaveCancelBottomPanel
                        cancelColor='grey'
                        onCancelClick={() => {this.setState(Object.assign({}, this.setState, {expanded: false}))}}
                        onOkClick={() => {
                            this.setState(
                                Object.assign({}, this.setState, {expanded: false}),
                                () => this.props.onSaveClick(formValues)
                            )
                        }}
                    />
                }
            </Packet>
        )
    }
}

FieldWizard.propTypes = propTypes

export default FieldWizard
