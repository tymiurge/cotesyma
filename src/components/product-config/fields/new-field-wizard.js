import React, {Component} from 'react'
import { Segment } from 'semantic-ui-react'
import { DataLosingAlert } from './data-losing-alert'
import { 
    Packet, 
    SaveCancelBottomPanel, 
    CancelBottomPanel, 
    WizardHeader,
    FieldTypeSelector
} from './../../common'
import StringFieldConfig from './string-field-config'
import SelectFieldConfig from './select-field-config'

// TODO: simplify it!!!!!
class NewFieldWizard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            typeSelected: false,
            type: '',
            typeDropdownDisabled: false,
            candidateType: null,
            typeReselectionAlertReseted: false,
            typeReselectionAlert: false,
            formState: {},
            onlyCancel: true
        }
    }

    onFieldTypeSelection = fieldType => {
        if (this.state.typeSelected && !this.state.typeReselectionAlertReseted) {
            const updates = {
                typeDropdownDisabled: true,
                candidateType: fieldType,
                typeReselectionAlert: true,
            }
            this.setState(Object.assign({}, this.state, updates))
        } else {
            const updates = {type: fieldType, typeSelected: true}
            this.setState(Object.assign({}, this.state, updates))
        }
    }

    onAlertCancelClick = showAlertFlag => {
        this.setState(
            Object.assign(
                {}, 
                this.state, 
                {
                    candidateType: null,
                    typeDropdownDisabled: false,
                    typeReselectionAlert: false,
                    typeReselectionAlertReseted: showAlertFlag
                }
            )
        )
    }

    onAlertOkClick = showAlertFlag => {
        const reselectedType = this.state.candidateType
        this.setState(
            Object.assign(
                {}, 
                this.state, 
                {
                    candidateType: null,
                    onlyCancel: true,
                    formState: {},
                    typeDropdownDisabled: false,
                    type: reselectedType,
                    typeReselectionAlert: false,
                    typeReselectionAlertReseted: showAlertFlag
                }
            )
        )
    }

    onFieldChange = update => {
        const formState = Object.assign({}, this.state.formState, update)
        const newState = Object.assign({}, this.state, {formState, onlyCancel: false})
        this.setState(newState)
    }

    configTypeSelector = () => {
        const fieldType = this.state.type
        if (fieldType === 'string' || fieldType === 'text') {
            return (<StringFieldConfig
                editable={true}
                onValueChange={this.onFieldChange}
                titleFieldName={'title'}
                
                titleFieldPlaceholder={'Field Title'}
                descFieldName={'desc'}
                
                descPlaceholder={'Field Descripton'}
                {...this.state.formValues}
            />)
        } if (fieldType === 'single-select') {
            return (<SelectFieldConfig
                onValueChange={this.onFieldChange}
                {...this.state.form}
            />)
        }
    }

    render () {
        return (
            <Packet>
                <WizardHeader top expanded={true} title={'New Field Wizard'} noIcons/>
                <Segment attached>
                    <FieldTypeSelector
                        key='new_wizard'
                        onChange={this.onFieldTypeSelection}
                        disabled={this.state.typeDropdownDisabled}
                        value={this.state.type}
                    />
                    {
                        this.state.typeReselectionAlert && !this.state.typeReselectionAlertReseted &&
                        <DataLosingAlert onCancelClick={this.onAlertCancelClick} onOkClick={this.onAlertOkClick}/>
                    }
                    {
                        this.state.typeSelected && this.configTypeSelector()
                    }                    
                </Segment>
                {
                    this.state.onlyCancel
                        ? <CancelBottomPanel
                            color='orange'
                            cancelColor='grey'
                            onCancelClick={this.props.onCancelClick}
                        />
                        : <SaveCancelBottomPanel color='orange' cancelColor='grey' onCancelClick={this.props.onCancelClick}/>
                }
                
            </Packet>
        )
    }
}

export default NewFieldWizard